// change theme
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

//generate

"use strict";
const $ = (e) => document.querySelector(e);

$("#generate").onclick = (e) => {
    const email = $("#email").value;
    const tag = $("#tag").value;
    const secret = $("#secret").value;

    let splitted = email.split("@");

    if (splitted.length < 2) {
        alert("email format error");
        return;
    }

    let salt = md5(`${tag}-${secret}`).substring(0, 5);

    $("#result").innerHTML = `${splitted[0]}+${tag}-${salt}@${splitted[1]}`;
};