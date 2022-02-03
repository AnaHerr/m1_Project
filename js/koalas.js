class Koalas{
    constructor(ctx){
        this.ctx = ctx;
        this.animals = []
    }
    
    init(){
        this.animals = []
    }

    move(frameNumber){
        if(frameNumber < 20) return
        if(frameNumber %50 === 0){
        const randomKo = Math.floor(Math.random()*400);
        this.animals.push(this.getNewKoala(randomKo))
        }
        this.animals.forEach( object => object.x += object.vx)
      }
  
    getNewKoala(position){
        let newKoala = {
            img: new Image(),
            width: 80,
            height: 60,
            x: this.ctx.canvas.width,
            y: position,
            vx: -3,
            vy: 0
        }  
        newKoala.img.src = "./images/koala-face.png"
  
        return newKoala
      }
      
      draw(){ 
       this.animals.forEach(object =>{
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