// main.js

// TODO

var audioValue = document.getElementById("volume-number");
var audio = document.getElementById("horn-sound");
audio.volume = audioValue;
var clicked = document.getElementById("honk-btn-container").addEventListener("click",function(){ alert("Testing"); });



