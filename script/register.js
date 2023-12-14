"use strict";
let button = document.getElementById("button");
let loginBtn = document.getElementById("login");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let wrongData = document.getElementById("wrongData");

class Users {
    constructor(id, firstName, lastName, email, password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

function register() {
    if (firstName.value == "" || lastName.value == "" || email.value == "" || password.value == "") {
        wrongData.innerText = "Missing Data";
    } else{
        let userArr = JSON.parse(localStorage.getItem("userData"));
        for (let x in userArr){
            if(email.value == userArr[x].email){
                wrongData.innerText = "The email is already used";
                break;
            }else{
                let user = new Users(userArr.length + 1, firstName.value, lastName.value, email.value, password.value);
                userArr.push(user);
                localStorage.setItem("userData", JSON.stringify(userArr));
                console.log(userArr);
                break;
            }
        }
    }
    }


function login_handler() {
    window.location.href = '../pages/login.html';
}

button.addEventListener("click", register);
loginBtn.addEventListener("click", login_handler);
