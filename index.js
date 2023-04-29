import {
  pageGame,
  pageStart,
  pageEnd ,
  pageGameOver,
  dino ,
  cactus,
  exitBtn ,
  backBtn ,
  jumpBtn,
  yesBtn,
  noneBtn,
  playAgainBtn,
  gameScore,
  gameScoreFinal,
} from './utils/constants.js'
let score = 0;

const fix = (evt) => {
  console.log(evt.target);
};

//фукнции для отобажения активных страниц
function activePage(page) {
  score = 0;
  gameScore.textContent = 0;
  page.classList.add('active');
}
function inativePage(page) {
  page.classList.remove('active');
}
//можно написать через условие
function rechangedPage(open, close) {
  activePage(open);
  inativePage(close);
}

//проверка кнопок при входе
const checkBtnStart = (evt) => {
  if (evt.target === yesBtn) {
    console.log(yesBtn)
    fix(evt)
    rechangedPage(pageGame, pageStart);
  } else if (evt.target === noneBtn) {
    rechangedPage(pageEnd, pageStart);
  }
};

const jump = () => {
  if (!dino.classList.contains('jump')) {
    dino.classList.add('jump');
  }
  setTimeout(function () {
    if (cactus.offsetLeft < 0) {
      score += 10;
      gameScore.textContent = score;
    }
    dino.classList.remove('jump');
  }, 400);
};

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
  if (cactusLeft < 30 && cactusLeft > 0 && dinoTop >= 140) {
    gameScoreFinal.textContent = score;
    rechangedPage(pageGameOver, pageGame);
  }
});

document.addEventListener('keydown', () => jump());
document.addEventListener('click', (evt) => checkBtnStart(evt));
jumpBtn.addEventListener('click', () => jump());
playAgainBtn.addEventListener('click', () => rechangedPage(pageGame, pageGameOver));
backBtn.addEventListener('click', () => rechangedPage(pageStart, pageEnd));
exitBtn.addEventListener('click', () => rechangedPage(pageStart, pageGame));
