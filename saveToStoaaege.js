async function saveToStorage(files) {
    var uuid = create_UUID();
    var date = getDate();
    
    var today = new Date();
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = '/'+yyyy + '-' + mm+'/';
    var storage = firebase.storage().ref(today + uuid + '/' + files.name);

    //upload file
    var upload = storage.put(files);
    //update progress bar
    upload.on(
        "state_changed",
        function progress(snapshot) {
            var percentage =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            document.getElementById("progress").value = percentage;
        },

        function error() {
            alert("error uploading file");
        },

        function complete() {
            upload.snapshot.ref.getDownloadURL().then(function (downloadURL) {

                db.collection("UploadedFiles").doc(uuid).set({  
                    DownloadLink: downloadURL,
                    UserUID: firebase.auth().currentUser.uid,
                    UserName: firebase.auth().currentUser.displayName,
                    DateOfUpload: date,
                    Email: firebase.auth().currentUser.email,
                    FileName: files.name,
                    DownloadLimit:downLimit,
                })
            });
        }
    );
}
