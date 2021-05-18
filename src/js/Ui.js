import getRandomInt from './random';

export default class Ui {
  constructor(elem, face) {
    this.count = 0, // eslint-disable-line
    this.falseCount = 0,
    this.elem = elem,
    this.interval,
    this.face = face,
    this.elemChild = elem.children;
  }

  interactive() {
    const that = this;
    this.face.src = './images/goblin.png';
    this.interval = setInterval(() => {
      this.elemChild[getRandomInt(0, this.elemChild.length)].appendChild(this.face);
    }, 1500);
    this.elem.addEventListener('click', (event) => {
      if (event.target.firstElementChild || event.srcElement.localName === 'img') {
        that.count += 1;
        console.log(that.count);
        document.getElementById('score').innerText = (`Score: ${that.count}`);
      } else {
        that.falseCount += 1;
        console.log(`Lose: ${that.falseCount}`);
        if (that.falseCount === 5) {
          clearInterval(that.interval); alert('Игра окончена');
        }
      }
    });
  }
}
