function readAllUser() {
    var userData;
    var docId;
    var position = 0;
    db.collection("User").orderBy("isVarified").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                userData = doc.data();
                docId = doc.id;
                displayUsers(userData, docId, position);
                position++;
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}

function displayUsers(userData, docId, position) {
    var li = document.createElement("li");
    li.setAttribute('Name', userData.name);
    li.setAttribute('Verification', userData.isVarified);
    li.setAttribute('Email', userData.Email);
    li.setAttribute('Password', userData.password);
    li.setAttribute('UID', userData.uid);

    var tq = document.createTextNode('Name-' + "[" + userData.name + "]  " + ' Verification-' + "[" + userData.isVarified + "]  " + ' Email-' + "[" + userData.Email + "]  " + ' Password-' + "[" + userData.password + "]  " + ' UID-' + "[" + userData.uid + "]");
    li.appendChild(tq);
    document.getElementById("allUser").appendChild(li);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("Verify");
    span.className = "verify";
    span.appendChild(txt);


    var span2 = document.createElement("SPAN2");
    var txt2 = document.createTextNode("Remove");
    span2.className = "remove";
    span2.appendChild(txt2);

    li.appendChild(span2);
    li.appendChild(span);

    var verify = document.getElementsByClassName("verify");
    verify[position].onclick = function () {
        console.log("verify clicked ", docId, "element")
        changeVerification(userData, docId)
    }

    var remove = document.getElementsByClassName("remove");
    remove[position].onclick = function () {
        console.log("Remove clicked ", docId)
        deleteUser(userData, docId)
    }


}
