class AudioController {
    //class is a blueprint for the object you are creating
    constructor() {
        this.bgMusic = new Audio("Assets/Audio/creepy.mp3");
        this.flipSound = new Audio ("Assets/Audio/flip.wav");
        this.matchSound = new Audio ("Assets/Audio/match.wav");
        this.victorySound = new Audio ("Assets/Audio/victory.wav");
        this.gameOverSound = new Audio ("Assets/Audio/gameover.wav");
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }
    startMusic() {
        this.bgMusic.play()
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip () {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    victory() {
        this.stopMusic();
        this.victorySound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}

class MixOrMatch {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById("time-remaining");
        this.ticker = document.getElementById("flips");
        this.audioController = new AudioController();
    }
    startGame() {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCardsArray = [];
        this.busy = true;
    }
    canFlipCard(card) {
        
    }
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName("overlay-text"));
    //returns an HTML collection, doesn't have accesss to JS array
    let cards = Array.from(document.getElementsByClassName("card"));

    //for each event of overlay, every time it is clicked it will remove the visible class
    overlays.forEach(overlay => {
        overlay.addEventListener("click", () => {
            overlay.classList.remove("visible");
            // game.startGame();
        });
    });
    cards.forEach(card => {
        card.addEventListener("click", () => {
            // game.flipCard(card);
        });
    });
}

if(document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready();
}
