function startDisplay(snapshot) {
    while (document.getElementById("myUL").firstChild) {
        document.getElementById("myUL").removeChild(document.getElementById("myUL").firstChild);
    }

    snapshot.forEach((doc) => {
        newElement(doc.data(), doc.id)
    });
}

function addCloseTag() {
    //   var docRef = db.collection('UploadedFiles').doc(snapId);


    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {

        close[i].onclick = function () {

            downloadInfo(this.parentElement.getAttribute('name'));
            window.open(this.parentElement.title, "_blank");


            db.collection('UploadedFiles').doc(this.parentElement.getAttribute('saveID')).update({
                DownloadLimit: firebase.firestore.FieldValue.increment(-1)
            });

        }
    }
}

function newElement(snapData, snapId) {

    var li = document.createElement("li");
    li.setAttribute('title', snapData.DownloadLink);
    li.setAttribute('name', snapData.FileName);
    li.setAttribute('saveID', snapId);
    var t = document.createTextNode(snapData.FileName + ' By:- ' + snapData.UserName);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u21E9");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    addCloseTag()



}
