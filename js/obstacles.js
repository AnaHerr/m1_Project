class Obstacles{
    constructor(ctx){
        this.ctx = ctx;
        this.objects = []
        
    }
    
    init(){
        this.objects = []
    }

    move(frameNumber){
      if(frameNumber < 20) return
      if(frameNumber %100 === 0){
      const randomObst = Math.floor(Math.random()*900) 
      console.log(randomObst);
      this.objects.push(this.getNewObstacle(randomObst))
      }
      this.objects.forEach( object => object.x += object.vx)
    }

    getNewObstacle(position){
      let newObstacle = {
          img: new Image(),
          width: 90,
          height: 80,
          x: position + this.ctx.canvas.width,
          y: 360,
          vx: -3,
          vy: 0
      }  
      newObstacle.img.src = "/images/free-faier.png"

      return newObstacle
    }
    
    draw(){
     this.objects.forEach(object =>{
         this.ctx.drawImage(
             object.img,
             object.x,
             object.y,
             object.width,
             object.height
         )
     })
    }
}