class Bot{

  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dx = 0.1;
    this.obj = document.createElement("a-entity");
    
    let b = document.createElement("a-box");
    b.setAttribute("position",{ x:0, y:-3.5, z: 0 });
    b.setAttribute("width",2);
    b.setAttribute("height",9);
    b.setAttribute("depth",2);
    b.setAttribute("color","red");
    this.obj.append(b);

    let s = document.createElement("a-sphere");
    s.setAttribute("position",{ x:0, y:2, z: 0 });
    s.setAttribute("radius",1);
    s.setAttribute("color","red");
    this.obj.append(s)

    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    scene.append(this.obj);
  }
  update(x1,x2){
    this.x += this.dx;
    if(this.x >= x1 || this.x < x2){
      this.dx = -this.dx;
    }
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
  }
  update2(z1,z2){
    this.z += this.dx;
    if(this.z >= z1 || this.z < z2){
      this.dx = -this.dx;
    }
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
  }
  hit(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
  }
}

