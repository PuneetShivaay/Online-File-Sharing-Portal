function Register() {
    var userEmail = document.getElementById("Remail_field").value;
    var userPass = document.getElementById("Rpassword_field").value;

    var userName = document.getElementById("Rname_field").value;
    var userConPass = document.getElementById("RconPassword_field").value;
    if (userConPass == userPass) {
        if (userEmail.length == 0) {
            alert('Email is requied')
        } else if (userPass.length == 0) {
            alert('Password is requied');
        } else if (userName.length == 0) {
            alert('Name is requied');
            return
        } else {
            signUP(userEmail,userPass,userName);
            return
        }

    } else {
        alert('Password Do not Match');
    }
}
