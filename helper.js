function rnd(l,u){
  return Math.floor(Math.random()*(u-l)+l);
}

function collision(obj1, obj2){
  let x1 = obj1.x;
  let x2 = obj2.x;
  let z1 = obj1.z;
  let z2 = obj2.z;

  let distance = Math.sqrt((x2 - x1)**2 + (z2 - z1)**2);

  return distance < 1;
}