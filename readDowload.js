function readDowload() {
    db.collection("UploadedFiles").where("DownloadLimit", ">", 0).orderBy("DownloadLimit","asc").orderBy('DateOfUpload', "desc").limit(totalFieltoDisplay).onSnapshot((snapshot) => {
        startDisplay(snapshot)



    });
}



/*

function readDowload() {

    db.collection("UploadedFiles").where("DownloadLimit", ">", 0).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                  //console.log(doc.id, " => ", doc.data());
                startDisplay(querySnapshot)

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}
*/
