let form = document.forms['form'];

form.addEventListener('click', function (event) {
    event.preventDefault();

    let username = form['username'].value;
    let email = form['email'].value;
    let password = form['password'].value;
    let dob = form['dob'].value;
    let gender = form['gender'].value;

    let date = new Date(dob);
    let today = new Date();
    let age = today.getTime() - date.getTime();
    age = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
    console.log(age);

    let NameErr = "";
    let EmailErr = "";
    let PasswordErr = "";
    let DobErr = "";
    let GenderErr = "";

    if (username === "") {
        NameErr = "Enter username";
        console.log(NameErr);
    }
    if (email === "") {
        EmailErr = "Enter Email";
        console.log(EmailErr);
    }
    if (password === "") {
        PasswordErr = "Enter Password";
        console.log(PasswordErr);
    }
    if (dob === "") {
        DobErr = "Enter DOB";
        console.log(DobErr);
    }
    if (gender === "") {
        GenderErr = "Select Gender";
        console.log(GenderErr);
    }

    if (!NameErr && !EmailErr && !PasswordErr && !DobErr && !GenderErr) {
        document.getElementById("usernameDisplay").innerHTML = username;
        document.getElementById("emailDisplay").innerHTML = email;
        document.getElementById("passwordDisplay").innerHTML = password;
        document.getElementById("dobDisplay").innerHTML = dob;
        document.getElementById("genderDisplay").innerHTML = gender;

        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('dob', age);
        localStorage.setItem('gender', gender);

        sessionStorage.setItem('username', form['username'].value);
        sessionStorage.setItem('email', form['email'].value);
        sessionStorage.setItem('password', form['password'].value);
        sessionStorage.setItem('age', age);
        sessionStorage.setItem('gender', form['gender'].value);

        document.getElementById("usernameDisplay").innerHTML = sessionStorage.getItem('username');
        document.getElementById("emailDisplay").innerHTML = sessionStorage.getItem('email');
        document.getElementById("passwordDisplay").innerHTML = sessionStorage.getItem('password');
        document.getElementById("dobDisplay").innerHTML = sessionStorage.getItem('age');
        document.getElementById("genderDisplay").innerHTML = sessionStorage.getItem('gender');
    } else {
        console.log(NameErr, EmailErr, PasswordErr, DobErr, GenderErr);
    }
    
});
