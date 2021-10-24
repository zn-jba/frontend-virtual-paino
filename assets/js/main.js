const AUDIO_PATH = "assets/audio";
const KEYS = ["a", "s", "d", "f", "g", "h", "j", "w", "e", "t", "y", "u"];

const processKey = (key) => {
    if (KEYS.includes(key)) new Audio(`${AUDIO_PATH}/${key.toUpperCase()}.mp3`).play();
    else console.error(`The ${key.toUpperCase()} key is not supported.`);
}

document.addEventListener("keydown", (e) => {
    processKey(e.key);
});

