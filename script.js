const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function detectCrash() {
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 90 && cactusLeft > 0 && dinoTop >= 140) {
        cactus.style.animation = "none";
        cactus.style.display = "block";

        const label = document.getElementsByTagName("label")[0];
        label.style.opacity = 1;
    }
}

function jump() {
    dino.classList.add("animateDino");

    setTimeout(() => {
        dino.classList.remove("animateDino");
    }, 600)
}

const game = document.getElementById("game");
game.addEventListener("click", jump);

setInterval(detectCrash, 100);