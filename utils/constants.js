const pageGame = document.querySelector('.game__box');
const pageStart = document.querySelector('.page-start');
const pageEnd = document.querySelector('.page-end');
const pageGameOver = document.querySelector('.page-final');
const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');
const exitBtn = document.querySelector('.game__btn-quit');
const backBtn = document.querySelector('.game__btn-back');
const jumpBtn = document.querySelector('.game__btn-jump');
const yesBtn = pageStart.querySelector('.game__btn-yes');
const noneBtn = pageStart.querySelector('.game__btn-no');
const playAgainBtn = pageGameOver.querySelector('.game__btn-return');
const gameScore = document.querySelector('.game__score span');
const gameScoreFinal = document.querySelector('.game__score_final span');

export {
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
  gameScoreFinal
};
