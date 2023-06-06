// import {
//   getRandomNumber,
//   getDistance,
//   getDistanceHint
// } from './helper';


// treasure coordinates
const WIDTH = 400;
const HEIGH = 400;

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH)
};

// click handler
let $mapa = document.querySelector('mapa');
let $distance = document.querySelector('distance');
let clicks = 3;

$mapa.addEventListener('clicks', function (e) {
  console.log('clicks');
  clicks++;
  let distance= getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = '<h1>${distanceHint}</h1>';

 
if (distanceHint < 20) {
  alert(`Found the treasure in ${clicks} click!`);
      location.reload();
  }
});