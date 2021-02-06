// main.js

// TODO

var audio = document.getElementById("horn-sound");
var audioValue = document.getElementById("volume-number").value;
var formData = document.getElementById("party-horn-form");
formData.addEventListener("submit", mainFunc);

function mainFunc(event) {
    alert(audioValue);
    event.preventDefault();
    audio.play();
}