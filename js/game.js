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
        song1.play()
    }

    play(){
        this.move();
        this.draw();
        this.drawScore();
        this.increaseDifficulty()
        if(this.checkCollisionsKoala()){
          this.score += 1;
          this.removeKoala();
          koalaAudio.play();
        }; 
        if(this.checkCollisionsFire() || this.score === 50) this.gameOver();
        if(this.frameNumber !== null){
            this.frameNumber = requestAnimationFrame(this.play.bind(this))
        };
    }
    
    stop() {
        cancelAnimationFrame(this.frameNumber);
        this.frameNumber = null;
        song1.pause();
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
        this.player.draw(this.frameNumber)
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
      this.ctx.fillStyle = "white";
      this.ctx.font = "bold 24px sans-serif";
      this.ctx.fillText (`Rescued koalas: ${this.score}`, 30, 50);
    }

    resetScore(){
      this.score = 0;
    }

    increaseDifficulty(){
      if(this.score < 10) return
      if(this.score >=10){
        this.obstacles.objects.forEach((fires)=>{
          fires.vx = -6
        })}

      if(this.score >=15){
        this.obstacles.objects.forEach((fires)=>{
          fires.vx = -8;
          });
        }
    }

    gameOver(){
      this.stop();
      this.ctx.save(); //to maintain the previous canvas(Rescued Koalas)
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.7";
      this.ctx.fillRect(0, 0, 900, 500);
      this.ctx.fillStyle = "white";
      this.ctx.textAlign = "center";
      this.ctx.font = "bold 36px sans-serif";
      
      if(this.score === 50){
        this.ctx.fillText(
        `You saved all 50 koalas! You rock!`,
        900 / 2,
        500 / 2);
        winAudio.play()}
      else {
        this.ctx.fillText(
          `You saved ${this.score} koalas! Well done!`,
          900 / 2,
          500 / 2
        );
      }

      this.ctx.restore();
    }

    
}
