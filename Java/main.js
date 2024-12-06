let warb = document.querySelector('.warb');
const signUplink = document.querySelector('.signUp-link');
const signlink = document.querySelector('.signIn-link');
let emaill = document.getElementById("emaill");
let passwordd = document.getElementById("pasword");

var neme = document.getElementById("inputName");
var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");

let signinSubmit = document.querySelector('#signin-submit');
let signUpSubmit = document.querySelector('#signUpSubmit');

let users;

if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
} else {
    users = [];
}


signUplink.addEventListener('click', () => {
    warb.classList.add('animate-sigin')
    warb.classList.remove('animate-sigup')
})

signlink.addEventListener('click', () => {
    warb.classList.add('animate-sigup')
    warb.classList.remove('animate-sigin')
})

signinSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    signIn()
})
signUpSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    signup()
})

const signup = () => {
    if (valname() && valemail() && valPassword()) {
        var user = {
            name: neme.value,
            email: email.value,
            password: password.value,
        }
        users.push(user);
        var json = JSON.stringify(users);
        localStorage.setItem("users", json);

        alert("تم التسجيل بنجاح!");

        signlink.click();
    }
}
const signIn = () => {
    if (emaill.value.trim() === "" || passwordd.value.trim() === "") {
        alert("يرجى إدخال البريد الإلكتروني وكلمة المرور.");
        return;
    }

    let user = users.find((user) => user.email == emaill.value);
    console.log(user);

    if (user != undefined) {
        if (user.password == passwordd.value) {
            localStorage.setItem("login", JSON.stringify(user));
            window.open("/pages/index2.html", "_self");
            console.log("login");
        } else {
            alert("كلمة المرور غير صحيحة.");
        }
    } else {
        alert("البريد الإلكتروني غير مسجل.");
    }
    console.log("try to login");
}



function valname() {
    let rex = /^[A-Za-z0-9]{3,}/
    if (rex.test(neme.value)) {
        return true;
    } else {
        alert("name shuodl bee 3 char or more");
        return false;
    }
}

function valemail() {
    let rex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (rex.test(email.value)) {

        return true

    }
    else {
        alert("name shuodl bee4554  char or more");
        return false
    }
}

function valPassword() {
    let rex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    console.log(password.value);
    console.log(rex.test(password.value));

    if (rex.test(password.value)) {
        return true
    }
    else {
        alert("name shuodl bee 8 char or more");
        return false
    }
}















