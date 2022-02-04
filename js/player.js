class Player{
    constructor(ctx){
    this.ctx = ctx
    this.width = 150
    this.height = 120
    this.kangarooArr = []
    this.kangarooCounter = 0

    //position
    this.x = 100
    this.y = 100

    //acceleration
    this.vy = 0 
    this.ay= 1 
    
    }


    init(){
    this.x = 100
    this.y = 100
    this.vy = 0
    this.createKangaroo()
    }
    
  //Kangaroo image
    createKangaroo(){
      for (let i = 0; i < 3; i++){
      const img = new Image();
      img.src = `images/kangarooSprite/1x/Recurso-${i + 1}.png`
      img.onload = () => this.kangarooArr.push(img)
      }
    }

    drawKangaroo(frameNumber){
      
      const kangtoPrint = this.kangarooArr[this.kangarooCounter];
      if(frameNumber %15 === 0){
        this.kangarooCounter +=1
      if(this.kangarooCounter > 2) this.kangarooCounter = 0
      }
      this.ctx.drawImage(kangtoPrint, this.x, this.y, this.width, this.height);    
    }

    move(){
    // only move y up when key pressed
    this.vy += this.ay;
    this.y += this.vy;
    if(this.y > 300) this.y = 300
    if(this.y < 5) this.y = 5

    }

    jumpUp() {
        this.vy = -20;
      }
  
 
    draw(frameNumber) {
        this.drawKangaroo(frameNumber)    
      }
    
  
      collidesWith(object) {
         return (this.x < object.x + object.width &&
          this.x + this.width > object.x &&
          this.y < object.y + object.height &&
          this.y + this.height > object.y)

      }
    
}