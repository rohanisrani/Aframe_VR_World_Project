class Shoot{
  constructor(){
    this.x = camera.object3D.position.x;
    this.z = camera.object3D.position.z;
    this.angle = camera.object3D.rotation.y + Math.PI;
    this.flag = false;
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("position",{x:this.x,y:2,z:this.z});
    this.obj.setAttribute("radius",0.5);
    scene.append(this.obj);
  }
  throwBall(){
    this.x = camera.object3D.position.x;
    this.z = camera.object3D.position.z;
    this.obj.setAttribute("position",{x:this.x,y:2,z:this.z});
    this.angle = camera.object3D.rotation.y + Math.PI;
    this.flag = true;
  }
  move(speed=2){
    if(this.flag){
      let dx = speed * Math.sin(this.angle);
      let dz = speed * Math.cos(this.angle);
      this.x += dx;
      this.z += dz;
      this.obj.object3D.position.x = this.x;
      this.obj.object3D.position.z = this.z; 
      
    }

  }
}