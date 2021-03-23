    //console.log(fielName)
 
        function downloadInfo(fielName) {
            var date = getDate();
            db.collection("DownloadInfo").add({
                DownloadBy: firebase.auth().currentUser.displayName,
                FileName: fielName,
                DateOFDownload: date,
            });
        }
