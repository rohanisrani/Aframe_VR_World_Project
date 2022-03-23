let scene, camera, move=false;
let rockets = [];
let clouds = [];
let shoot;

window.onload = function(){
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-entity");
  bullet = new Shoot();
  pigeon = document.getElementById("pigeon");
  maple = document.getElementById("maple");
  loadSound("wind.mp3");
  setSoundVolume("wind.mp3", 100);
  playSound("wind.mp3");

  motionLoop();

  let dx = Math.floor(Math.random() * 50) - 50;
  let dz = Math.floor(Math.random() * 100) + 25;
  let cloud = new Cloud();
  cloud.move(dx, 30, dz);

  let dx1 = Math.floor(Math.random() * 50) - 50;
  let dz1 = Math.floor(Math.random() * 100) + 25;
  let cloud1 = new Cloud();
  cloud1.move(dx1, 30, dz1);

  let dx2 = Math.floor(Math.random() * 50) - 50;
  let dz2 = Math.floor(Math.random() * 100) + 25;
  let cloud2 = new Cloud();
  cloud2.move(dx2, 30, dz2);

  let dx3 = Math.floor(Math.random() * 50) - 50;
  let dz3 = Math.floor(Math.random() * 100) + 25;
  let cloud3 = new Cloud();
  cloud3.move(dx3, 30, dz3);

  let dx4 = Math.floor(Math.random() * 50) - 50;
  let dz4 = Math.floor(Math.random() * 100) + 25;
  let cloud4 = new Cloud();
  cloud4.move(dx4, 30, dz4);

  let dx5 = Math.floor(Math.random() * 50) - 50;
  let dz5 = Math.floor(Math.random() * 100) + 25;
  let cloud5 = new Cloud();
  cloud5.move(dx5, 30, dz5);

  let dx6 = Math.floor(Math.random() * 50) - 50;
  let dz6 = Math.floor(Math.random() * 100) + 25;
  let cloud6 = new Cloud();
  cloud6.move(dx6, 30, dz6);

  let dx7 = Math.floor(Math.random() * 50) - 50;
  let dz7 = Math.floor(Math.random() * 100) + 25;
  let cloud7 = new Cloud();
  cloud7.move(dx7, 30, dz7);

  let dx8 = Math.floor(Math.random() * 50) - 50;
  let dz8 = Math.floor(Math.random() * 100) + 25;
  let cloud8 = new Cloud();
  cloud8.move(dx8, 30, dz8);

  let dx9 = Math.floor(Math.random() * 50) - 50;
  let dz9 = Math.floor(Math.random() * 100) + 25;
  let cloud9 = new Cloud();
  cloud9.move(dx9, 30, dz9);

//rain
  for(let x = 20; x < 70; x+=2){
    for(let z = -50; z < 30; z+=2){
      let speed = rnd(1,5) / 30;
      let r = new Rocket(x,-1,z, speed);
      rockets.push(r);
    }
  }  

//cloud 
  for(let x = -20; x < 20; x+=2){
    for(let z = -30; z < 30; z+=2){
      let speed = rnd(1,5) / 50;
      let r = new Rocket(x,-1,z, speed);
      rockets.push(r);
    }
  }
  
  bot1 = new Bot(0,2,10);
  bot2 = new Bot(10,4,55);
  loop();
}

  window.addEventListener("click", function() {
    bullet.throwBall();
  });

function loop(){
  
   if (bullet.flag) {
    bullet.move();
  }

  if(collision(bullet, bot1)){
    bot1.hit(0,-20,18);
    }
  
  bot1.update(1,-10);
  bot2.update(15,-15);

  for(let rocket of rockets){
    rocket.move();
    if (rocket.y < 0){
      rocket.y = 10;
    }
  }
 

  setTimeout(loop,10);
}

window.addEventListener("touchstart", (e) => {
  move = true;
})
window.addEventListener("touchend", (e) => {
  move = false;
})

function motionLoop(){
  if(move){
    let angle = camera.getAttribute("rotation");

    // calculate the angles
    // the camera's theta == 0 is actually 90' in the clipspace
    let theta = (angle.x * Math.PI / 180) + Math.PI / 2 
    let fi = angle.y * Math.PI / 180
    let r = 0.1
    // calculate the position shifts
    let z = Math.sin(theta) * Math.cos(fi) * r
    let x = Math.sin(theta) * Math.sin(fi) * r
    let y = Math.cos(theta) * r

    // update the position
    camera.object3D.position.x -= x;
    camera.object3D.position.y -= y;
    camera.object3D.position.z -= z;

  }
  setTimeout(motionLoop,10);
}
