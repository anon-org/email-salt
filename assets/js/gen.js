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
