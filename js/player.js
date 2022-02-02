class Player{
    constructor(ctx){
    this.ctx = ctx
    this.width = 150
    this.height = 120

    //position
    this.x = 100
    this.y = 100

    //acceleration
    this.vy = 0 
    this.ay= 1 
    

    //Kangaroo image
    this.img = new Image()
    this.img.src = "/images/KNG-jump2.png"

    }


    init(){
    this.x = 100
    this.y = 100
    this.vy = 0
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
          this.ctx.drawImage(
          this.img,
          this.x, // the x-axis coordinate in the destination canvas
          this.y, // the y-axis coordinate in the destination canvas   
          this.width,
          this.height       
        );
      }
    
  
      collidesWith(object) {
         return (this.x < object.x + object.width &&
          this.x + this.width > object.x &&
          this.y < object.y + object.height &&
          this.y + this.height > object.y)

      }
    
}