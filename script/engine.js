const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider");
const keysCheck = document.querySelector(".keys-check");

let mappedKeys = [];
let audio = new Audio(`../tunes/a.wav`);

const playTune = (key) => {
    audio.src = `../tunes/${key}.wav`; // Adjusted the audio file path
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);

    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
    mappedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", 
(e) => {
    if(mappedKeys.includes(e.key)){
        playTune(e.key);
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

volumeSlider.addEventListener("input", handleVolume);

const keysVisibility = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

keysCheck.addEventListener("input", keysVisibility);