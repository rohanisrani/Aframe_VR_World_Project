class Rocket{
  constructor(x,y,z,speed){
    this.x = x;
    this.z = z;
    this.y = y;
    this.speed = -speed;
    
    this.obj = document.createElement("a-entity");
    
    let tip = document.createElement("a-cone");
    let bottom = document.createElement("a-sphere");
    
    //cone
    tip.setAttribute("radius-top",0);
    tip.setAttribute("radius-bottom",0.2);
    tip.setAttribute("height",0.5);
    tip.setAttribute("opacity", 0.8)
    tip.setAttribute("color","blue");
    tip.setAttribute("position",{x:-50,y:10,z:30});
    this.obj.append(tip);

    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
    scene.append(this.obj)
  }
  move(){
    this.y += this.speed;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
  }
}