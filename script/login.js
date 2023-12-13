var _a;
let userList = [];
/*move to register.ts*/
localStorage.clear();
let userArr = [];
const initData = () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "../../data/users.json", true);
    xhr.onload = function () {
        let response = JSON.parse(this.responseText);
        response = response.users;
        userArr.push(...response);
        localStorage.setItem("userData", JSON.stringify(response));
    };
    console.log(userArr);
    xhr.send();
};
initData();
//move until here to register.ts
let errMsg = document.getElementById("showError");
errMsg.style.display = 'none';
initUsers();
function initUsers() {
    let response = localStorage.getItem("userData");
    if (response != null) {
        let res = JSON.parse(response);
        userList.push(...res);
    }
    console.log(userList);
}
function login_handler() {
    //window.location.href = "../pages/homePage.html";
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if (email.value == "" || password.value == "") {
        //alert("Missing Data!");
        errMsg.innerHTML = 'Missing Data';
        errMsg.style.display = 'block';
    }
    else {
        //let user = new User(userName.value , password.value);
        console.log(email.value);
        console.log(password.value);
        errMsg.style.display = 'none';
        var currentUser;
        for (let x in userList) {
            console.log(userList[x]);
            //בודק התאמה של שם משתמש וסיסמה שהוקלדו ע"י המשתמש, מול המערך שייצרתי
            // נמצאה התאמה
            if (userList[x].email == email.value && userList[x].password == password.value) {
                // שומר את הנתונים של המשתמש הנוכחי שנכנס למערכת
                currentUser = userList[x];
                // console.log('user is valid');              
                // console.log(userList[x]);              
                break;
            }
        }
        //console.log("Test current User");
        // בודק אם המשתמש הנוכחי נמצא והוגדר
        if (currentUser != undefined) {
            console.log(currentUser);
            //שומר את נתוני המשתמש בלוקל סטורג' לטובת שימוש במערכת 
            localStorage.setItem("currentUserData", JSON.stringify(currentUser));
            // document.getElementById('loginPage').className='login-animation';            
            setTimeout(function () {
                window.location.href = "../pages/home.html";
            }, 3000);
        }
        else {
            //המשתמש הנוכחי לא הוגדר כיוון שלא נמצאה התאמה מול מערך המשתמשים
            errMsg.style.display = 'block';
            errMsg.innerHTML = 'User not exist';
            // alert('User not exist')
        }
    }
}
(_a = document.getElementById("logIn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", login_handler);
export {};
