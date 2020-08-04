let colors = ['blue', 'red', 'pink', 'yellow', 'cyan', 'orange', 'green'];

const btn = document.querySelector('button');
const main = document.querySelector('main');
const simple = document.querySelector('.simple a');

let count = 0;

//FIRST OPTION
// function randomNum() {
//   return Math.floor(Math.random()*colors.length);
// }

// btn.addEventListener('click', function(){
//   let random = randomNum();
//   main.style.backgroundColor = colors[random];
//   simple.style.color =  colors[random];
// })


function move(){
  const item = colors[count];
  main.style.backgroundColor = item;
    simple.style.color =  item;
}

btn.addEventListener('click', function(){
  count++;
    if(count > colors.length - 1) {
      count = 0;
    }
    move();
  })





//WRONG FUNCTIONS
// function culur(){
//   for(let i = 0; i < colors.length; i++) {
//     // main.style.backgroundColor = colors[2];
//     return i;
//      }
// }


//  btn.addEventListener('click', function(){
//    let clue = culur();
//   main.style.backgroundColor = colors[clue];

// })

// for(let i = 0; i < colors.length; i++) {
//   btn.addEventListener('click', function() {
//     main.style.backgroundColor = colors[i];
//   })
// }
// btn.addEventListener('click', change)

// function change() {
//   main.style.backgroundColor = colors[i];
// }

// for(let i = 0; i < colors.length; i++) {
//   change();
// }