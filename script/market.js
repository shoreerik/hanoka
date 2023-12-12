"use strict";
var _a, _b;
if (!(localStorage.getItem(''))) {
    window.location.href = "";
}
else {
}
const logout = () => {
    localStorage.clear();
    window.location.href = "";
};
const homepage = () => {
};
(_a = document.getElementById('logout')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', logout);
(_b = document.getElementById('home')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', homepage);
document.getElementById('countrySelect');
document.getElementById('countrySelect');
