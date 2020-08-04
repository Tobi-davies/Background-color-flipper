const colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B' , 'C', 'D', 'E', 'F'];

const btn = document.querySelector('button');
const diff = document.querySelector('.diff');
const section = document.querySelector('section');
const text = document.querySelector('.hex a');



btn.addEventListener('click', function(){
  let hash = '#';
  for(let i = 0; i < 6; i++) {
    hash += colors[getNum()];
  }
  section.style.backgroundColor = hash;
  diff.textContent = hash;
  diff.style.color = hash;
  text.style.color = hash;
})


function getNum(){
  return Math.floor(Math.random()*colors.length);
}