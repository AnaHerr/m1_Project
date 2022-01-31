class Game{
    constructor(ctx, player, background, obstacles, koalas){
        this.ctx = ctx;
        this.player = player;
        this.background = background;
        this.obstacles = obstacles;
        this.koalas = koalas;
        this.frameNumber = 0;
        

      document.addEventListener("keydown", (event) =>{
          if(event.code === 'Space'){
            this.player.jumpUp();
          }
      });
   
    }

    start(){
        this.init()
        this.play()
    }

    init(){ //to restart the game/initial page
        if(this.frameNumber) this.stop()
        this.frameNumber = 0;
        this.background.init()
        this.obstacles.init()
        this.koalas.init()
        this.player.init()
        //this.sound.init() ***search for song
    }

    play(){
        this.move();
        this.draw();
        if(this.checkCollisions()) this.gameOver();
        if(this.frameNumber !== null){
            this.frameNumber = requestAnimationFrame(this.play.bind(this))
        }
    }
    
    stop() {
        cancelAnimationFrame(this.frameNumber);
        this.frameNumber = null;
      }


    move() {
        this.background.move(this.frameNumber);
        this.obstacles.move(this.frameNumber);
        this.player.move(this.frameNumber);
        this.koalas.move(this.frameNumber);
      }


    draw(){
       // this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        this.background.draw()
        this.obstacles.draw()
        this.koalas.draw()
        this.player.draw()
    }
  

    checkCollisions(){
    console.log("Check colisions")
  }
}
