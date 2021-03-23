function changeVerification(userData, recDocId) {

    var verificationRef = db.collection("User").doc(recDocId);
    return verificationRef.update({
            isVarified: true
        })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });
}


