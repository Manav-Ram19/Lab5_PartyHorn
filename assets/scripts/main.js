// main.js

// TODO

// Declaring all of the DOMS
let audio = document.getElementById("horn-sound");
let soundImage = document.getElementById("sound-image");
let formData = document.getElementById("party-horn-form");
let volumeNumber = document.getElementById("volume-number");
let volumeSlider = document.getElementById("volume-slider");
let volumeImage = document.getElementById("volume-image");
let button = document.getElementById("honk-btn");
let radioAirHorn = document.getElementById("radio-air-horn");
let radioCarHorn = document.getElementById("radio-car-horn");
let radioPartyHorn = document.getElementById("radio-party-horn");

// Adding event Listeners
volumeNumber.addEventListener("input", volumeNumberChange);
volumeSlider.addEventListener("input", volumeSliderChange);
radioAirHorn.addEventListener("change", airHorn);
radioCarHorn.addEventListener("change", carHorn);
radioPartyHorn.addEventListener("change", partyHorn);
formData.addEventListener("submit", playAudio);

// Updates volume based on numeric input
function volumeNumberChange(event) {
    event.preventDefault();

    // Volume from numeric input
    let volume = volumeNumber.value;

    // Set Slider and audio volume
    volumeSlider.value = volume;
    audio.volume = volume/100;
    updateVolumeImage(volume);
    updateButton(volume);
}

// Updates volume based on slider input
function volumeSliderChange(event) {
    event.preventDefault();

    // Volume from slider
    let volume = volumeSlider.value;

    // Set numeric volume and audio volume
    volumeNumber.value = volume;
    audio.volume = volume/100;
    updateVolumeImage(volume);
    updateButton(volume);
}

// Updates the volume image based on the volume
function updateVolumeImage(volume) {
    if(volume >= 67) {
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
    }
    else if(volume >= 34) {
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    }
    else if(volume >= 1) {
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    }
    else {
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
    }
}

// Disables the button if the volume is 0
function updateButton(volume) {
    if(volume == 0) {
        button.disabled = true;
    }
    else {
        button.disabled = false;
    }
}

// Updates picture and audio to air-horn
function airHorn(event) {
    event.preventDefault();

    if(radioAirHorn.checked == true) {
        audio.src = "./assets/media/audio/air-horn.mp3";
        soundImage.src = "./assets/media/images/air-horn.svg";
    }
}

// Updates picture and audio to car-horn
function carHorn(event) {
    event.preventDefault();

    if(radioCarHorn.checked == true) {
        audio.src = "./assets/media/audio/car-horn.mp3";
        soundImage.src = "./assets/media/images/car.svg";
    }
}

// Updates picture and audio to airhorn
function partyHorn(event) {
    event.preventDefault();

    if(radioPartyHorn.checked == true) {
        audio.src = "./assets/media/audio/party-horn.mp3";
        soundImage.src = "./assets/media/images/party-horn.svg";
    }
}

// Plays the Audio
function playAudio(event) {
    event.preventDefault();
    audio.play();
}