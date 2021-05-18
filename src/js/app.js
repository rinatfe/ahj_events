import Board from './Board';
import Ui from './Ui';

const field = [
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
];
const boardEl = document.getElementById('board');
const img = document.createElement('img');
const place = new Board(field);
const actions = new Ui(boardEl, img);
place.renderBoard();
actions.interactive();

/* const boardEl = document.getElementById('board');
const field = [
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
];

let count=0;
let falsecount = 0;
boardEl.addEventListener('click', function (event) {
  if (event.target.firstElementChild) {
    count= count +1;
    document.getElementById('score').innerText = ("Score: " + count);
  } else {
    falsecount= falsecount +1;
    console.log("Lose: " + falsecount);
    if(falsecount == 5) {
      clearInterval(interval); alert('Игра окончена');
    }
  }
});

const elem = boardEl.children;
const face = document.createElement('img');
face.src = './images/goblin.png';

function renderBoard(board) {
  const fields = [];
  for (const [i, row] of board.entries()) {
    for (const [j, value] of row.entries()) {
      fields.push(`
          <div class="field ${value ? 'busy' : 'free'}"
              data-row="${i}"
              data-col="${j}"
              style="grid-row:${i + 1};grid-column:${j + 1};"
          >
            ${value || ''}
          </div>
        `);
    }
  }
  boardEl.innerHTML = fields.join('');
}

function getRandomInt(minimum, maximum) {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min)) + min;
}

renderBoard(field);

let interval = setInterval(() => {
  elem[getRandomInt(0, elem.length)].appendChild(face);

}, 1000); */
