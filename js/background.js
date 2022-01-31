class Background{
constructor(ctx){
   this.ctx = ctx;
   this.backgroundMain = {
       img: new Image(), //we are creating the image(new) telling the object what is the image and which properties is going to have
       width: this.ctx.canvas.width,
       height: this.ctx.canvas.height,
       x: 0,
       y: 0,
       vx: -2,
       vy: 0
   }
   this.backgroundMain.img.src = "/images/512px-Rain_Forest_Daintree_Australia.jpg" 
   
   this.backgroundFloor = {
       img: new Image(), //we are creating the image(new) telling the object what is the image and which properties is going to have
       width: this.ctx.canvas.width,
       height: 100,
       x: 0,
       y: 400,
       vx: -2,
       vy: 0
   }
   this.backgroundFloor.img.src = "/images/bg-floor.png"
}

   init() {
    this.backgroundFloor.x = 0;
    this.backgroundFloor.y = this.ctx.canvas.height - 100;
    this.backgroundMain.x = 0;
    this.backgroundMain.y = 0; 
  }

  move(frameNumber){
    this.backgroundMain.x += this.backgroundMain.vx;
    this.backgroundFloor.x += this.backgroundFloor.vx;

    if(this.backgroundMain.x + this.backgroundMain.width <= 0) 
    this.backgroundMain.x = 0;
    if(this.backgroundFloor.x + this.backgroundFloor.width <= 0) 
    this.backgroundFloor.x = 0;
}


draw(frameNumber){
    // Main bg first piece
    this.ctx.drawImage(
        this.backgroundMain.img,
        this.backgroundMain.x,
        this.backgroundMain.y,
        this.backgroundMain.width,
        this.backgroundMain.height
    );
    //Main bg second piece
    this.ctx.drawImage(
        this.backgroundMain.img,
        this.backgroundMain.x + this.backgroundMain.width,
        this.backgroundMain.y,
        this.backgroundMain.width,
        this.backgroundMain.height
    );
    
    //Floor bg first piece
    this.ctx.drawImage(
        this.backgroundFloor.img,
        this.backgroundFloor.x,
        this.backgroundFloor.y,
        this.backgroundFloor.width,
        this.backgroundFloor.height
    );
    //Floor bg second piece
    this.ctx.drawImage(
        this.backgroundFloor.img,
        this.backgroundFloor.x + this.backgroundFloor.width,
        this.backgroundFloor.y,
        this.backgroundFloor.width,
        this.backgroundFloor.height
    );
    
}
}

