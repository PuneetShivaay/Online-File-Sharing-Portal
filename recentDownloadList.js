function recentDownloadList(snapshot) {
    while (document.getElementById("reUL").firstChild) {
        document.getElementById("reUL").removeChild(document.getElementById("reUL").firstChild);
    }

    snapshot.forEach((doc) => {
        preElement(doc.data())
    });
}


function preElement(snapData) {

    var li = document.createElement("li");
   // li.setAttribute('title', snapData.DownloadLink);
    //li.setAttribute('name', snapData.FileName);
    var t = document.createTextNode(snapData.FileName + ' By:- ' + snapData.DownloadBy);
    li.appendChild(t);
    document.getElementById("reUL").appendChild(li);
    var span = document.createElement("SPAN");
    span.className = "close";
    li.appendChild(span);

}
