const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const player = new Player(ctx) 
const background = new Background(ctx)
const obstacles = new Obstacles(ctx)
const koalas = new Koalas(ctx)

const game = new Game(ctx, player, background, obstacles, koalas)

const startButton = document.getElementById("start-button")
   startButton.onclick = () => {
       startButton.text = "Play Again"
       game.start();
   }


   