const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const player = new Player(ctx) 
player.createKangaroo()
const background = new Background(ctx)
const obstacles = new Obstacles(ctx)
const koalas = new Koalas(ctx)

const game = new Game(ctx, player, background, obstacles, koalas)

const gameBoard = document.getElementById("game-board")
const startPage = document.getElementById("start-page")
const startButton = document.getElementById("start-button")
   startButton.onclick = () => {
       startButton.innerText = "Play Again";
       if(startPage.className !== "hidden"){startPage.classList.toggle("hidden")}
       if(gameBoard.className === "hidden"){gameBoard.classList.toggle("hidden")}
       startButton.blur();
       game.start();
   }


const song1 = new Audio("audio/gamemusic-6082.mp3")
const fireAudio = new Audio("audio/short-fireball-woosh-6146.mp3")
const koalaAudio = new Audio("audio/collect-5930.mp3")
const winAudio = new Audio("audio/success-fanfare-trumpets-6185.mp3")


   