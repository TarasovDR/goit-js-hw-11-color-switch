import colors from './colors';

const COLOR_DELAY = 1000;
let colorIntervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};
refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  if (refs.startBtn.disabled) {
    return;
  }
  refs.startBtn.disabled = false;
  colorIntervalId = setInterval(onChangeColor, COLOR_DELAY);
}

function onStopBtnClick() {
  clearInterval(colorIntervalId);
  refs.startBtn.disabled = false;
}

function onChangeColor() {
  let currentColor = randomIntegerFromInterval(0, colors.length - 1);
  document.body.style.backgroundColor = colors[currentColor];
}
