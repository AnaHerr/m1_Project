class Game{
    constructor(ctx, player, background, obstacles, koalas){
        this.ctx = ctx;
        this.player = player;
        this.background = background;
        this.obstacles = obstacles;
        this.koalas = koalas;
        this.frameNumber = 0;
        this.score = 0;
        this.koalaSaved = false;
        

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
        this.resetScore()
        //this.sound.init() ***search for song
    }

    play(){
        this.move();
        this.draw();
        this.drawScore();
        if(this.checkCollisionsKoala()){
          this.score += 1;
          this.removeKoala()
        };
        if(this.checkCollisionsFire()) this.gameOver();
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
        this.ctx.clearRect(0, 0, ctx.width, ctx.height)
        this.background.draw()
        this.obstacles.draw()
        this.koalas.draw()
        this.player.draw()
        this.drawScore()
    }
  

    checkCollisionsFire(){
      let collisions = false;

      if(this.obstacles.objects.some((obstacles)=>
        this.player.collidesWith(obstacles)
        )) {collisions = true}
      
      return collisions;
    }


    checkCollisionsKoala(koala){
        if(this.koalas.animals.some((koala)=>
        this.player.collidesWith(koala)) !== this.koalaSaved){
        return this.koalaSaved = !this.koalaSaved;
        }
                
    }
    
    removeKoala(){
      this.koalas.animals.forEach(koala =>{
        if (this.player.collidesWith(koala)){
        let index = this.koalas.animals.indexOf(koala)
        this.koalas.animals.splice(index, 1)
        }
      })
    }

    drawScore(){
      this.ctx.fillStyle = "black";
      this.ctx.font = "bold 24px sans-serif";
      this.ctx.fillText (`Rescued koalas: ${this.score}`, 20, 40);
      
    }

    resetScore(){
      this.score = 0;
    }

    gameOver(){
      this.stop();
      this.ctx.save(); //to maintain the previous canvas(Rescued Koalas)
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.7";
      this.ctx.fillRect(0, 0, 900, 500);
      this.ctx.fillStyle = "white";
      this.ctx.textAlign = "center";
      this.ctx.font = "bold 36px sans-serif";
      this.ctx.fillText(
        "Game Over",
        900 / 2,
        500 / 2
      );
      this.ctx.restore();
    }

    
}
