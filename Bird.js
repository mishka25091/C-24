class Bird{
   constructor(x,y,width,height) {
       var options ={
           restitution:0.8,
           friction:0.1,
           density:1.0,
       }
       this.body=Bodies.rectangle(x,y,width,height,options);
       this.height=height;
       this.width=width;
       World.add(world,this.body);
   }
}