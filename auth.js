    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            readDowload()
            recentDownloads();
            // User is signed in.
            document.getElementById("user_div").style.display = "block";
            document.getElementById("login_div").style.display = "none";
            var user = firebase.auth().currentUser;

            if (user != null) {
                var email_id = user.email;

            }

        } else {
            document.getElementById("user_div").style.display = "none";
            document.getElementById("login_div").style.display = "block";
        }
    });

    function login() {
        var userEmail = document.getElementById("email_field").value;
        var userPass = document.getElementById("password_field").value;

        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert("Error : " + errorMessage);
            // ...
        });
    }

    function signUP(email, password, name) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {

                db.collection("User").doc(firebase.auth().currentUser.uid).set({
                    Email: email,
                    password: password,
                    name: name,
                    uid: firebase.auth().currentUser.uid,
                    isVarified: false,
                });


                var user = firebase.auth().currentUser;
                user.updateProfile({
                    displayName: name,
                }).then(function () {
                    // Update successful.
                }).catch(function (error) {
                    // An error happened.
                });
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
    }

    function logout() {
        firebase.auth().signOut();
    }
