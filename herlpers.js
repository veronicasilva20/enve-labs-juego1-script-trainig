// generate a random Number
let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
  }
  
  // get the Distance of two points
  let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
  }
  
  // return an String depending on the distances 
  let getDistanceHint = distance => {
    if (distance < 30) {
      return "caliente hirviendo!";
    } else if (distance < 40) {
      return "muy caliente!";
    } else if (distance < 60) {
      return "caliente!";
    } else if (distance < 100) {
      return "templado";
    } else if (distance < 180) {
      return "frio!";
    } else if (distance < 360) {
      return "muy frio!";
    } else {
      return "congelado!";
    }
  }