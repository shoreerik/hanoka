
if (!(localStorage.getItem(''))) {
    window.location.href = ""
} else {

}


const logout = () => {
    localStorage.clear();
    window.location.href = ""
}

const homepage = () => {

}

document.getElementById('logout')?.addEventListener('click', logout)
document.getElementById('home')?.addEventListener('click', homepage)
document.getElementById('countrySelect') as HTMLSelectElement;
document.getElementById('countrySelect') as HTMLSelectElement;


