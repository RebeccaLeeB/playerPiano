const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("/a.wav"); //by default, audio src is "a" tune

const playTune = (key) => {
    audio.src = `/${key}.wav`; //passing audio src based on key pressed
    audio.play(); //playing audio

    const clickKey = document.querySelector(`[data-key="${key}"]`); // getting cliked key elmement
    clickedKey.classList.add('active');
    setTimeout(() => {
        clickedKey.classList.remove('active');
    }, 150);

}


pianoKeys.forEach(key => {
    //calling playTune function with passing data-key value as an argument.
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const pressedKey = (e) => {
    playTune(e.key);
}

document.addEventListener("keydown", pressedKey);
