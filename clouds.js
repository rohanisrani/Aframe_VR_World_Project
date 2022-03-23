class Cloud{
  constructor(x, y, z){
  this.x = x;
  this.y = y;
  this.z = z;
    
  this.obj = document.createElement("a-entity");

  let sect1 = document.createElement("a-sphere");
  sect1.setAttribute("position", {x:0, y:0.5, z:0});
  this.obj.append(sect1);

  let sect2 = document.createElement("a-sphere");
  sect2.setAttribute("position", {x:1.5, y:0, z:0});
  this.obj.append(sect2);

  let sect3 = document.createElement("a-sphere");
  sect3.setAttribute("position", {x:-1.5, y:0, z:0});
  this.obj.append(sect3);

  let sect4 = document.createElement("a-sphere");
  sect4.setAttribute("position", {x:0, y:0, z:-1});
  this.obj.append(sect4);

  let sect5 = document.createElement("a-sphere");
  sect5.setAttribute("position", {x:0, y:0, z:1});
  this.obj.append(sect5);

  this.obj.setAttribute("position",{x:x,y:y,z:z});

  scene.append(this.obj);

  }
  move(x,y,z){
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    //console.log(this.obj.getAttribute("position"));
  }
  scale(size){
    this.obj.setAttribute("scale",{x:size,y:size,z:size});
  }

}