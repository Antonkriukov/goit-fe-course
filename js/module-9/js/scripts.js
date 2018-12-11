'use strict';

const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-reset');
const lapBtn = document.querySelector('.js-take-lap');
const clockFace = document.querySelector('.js-time');
const list = document.querySelector('.js-laps');


const Stopwatch = {
  id : null,
  startTime: null,
  delta : null,
  isActive : false,
  
  startTimer() {
      this.isActive = true;
      this.startTime = Date.now() - this.delta;
      this.id = setInterval(() => {
          const currentTime = Date.now();
          this.delta = currentTime - this.startTime;
          updateTime(this.delta);
      }, 100);    
  },

  stop() {
      clearInterval(this.id);
      this.isActive = false;
  },

  clickButton() {
      if(this.isActive) {
          console.log('started');
      } else {
          this.stop();
      }
  },

  resetTimer() {
      this.stop();
      lapsReset();
      this.delta = 0;
      updateTime(this.delta);
      startBtn.textContent = 'Start';
  },

  lapTimer() {
      
      let lap = document.createElement('li');
      lap.textContent = formatTime(this.delta);
      list.appendChild(lap);
      lap.setAttribute('class', 'lap');
  },
};


function updateTime (time) {
  const formattedTime = formatTime(time);
  clockFace.textContent = formattedTime;
}



function formatTime (timers) {
  const date = new Date(timers);

  let minutes = date.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  let seconds = date.getSeconds();
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  let mseconds = String(date.getMilliseconds()).slice(0,1);
  
  return `${minutes}:${seconds}.${mseconds}`;
}


function lapsReset () {
  const laps = document.querySelectorAll('.lap');
  laps.forEach(lap => {
      lap.remove();
  })
}

function clickButton () {
  if(!Stopwatch.isActive) {
    Stopwatch.startTimer();
      startBtn.textContent = 'Pause';
  } else {
    Stopwatch.stop();
      startBtn.textContent = 'Continue';
  };
}


startBtn.addEventListener('click', clickButton);
stopBtn.addEventListener('click', Stopwatch.resetTimer.bind(Stopwatch));
lapBtn.addEventListener('click', Stopwatch.lapTimer.bind(Stopwatch));