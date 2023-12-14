"use strict";
let button = document.getElementById("button");
let loginBtn = document.getElementById("login");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let wrongData = document.getElementById("wrongData");

let xhr = new XMLHttpRequest();

        xhr.open(`GET`, '../data/users.json', true);

        xhr.onload = function () {
            let response = JSON.parse(this.responseText);
            if(!localStorage.getItem("userData")){
                localStorage.setItem("userData", JSON.stringify(response.users));
            }
        }
        xhr.send();


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
    } 
    }


function login_handler() {
    window.location.href = '../pages/login.html';
}

button.addEventListener("click", register);
loginBtn.addEventListener("click", login_handler);
