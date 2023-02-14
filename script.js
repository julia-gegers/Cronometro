const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')
const milisecondsEl = document.querySelector('#miliseconds')

const startBtn = document.querySelector('#startBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const resumeBtn = document.querySelector('#resumeBtn')
const resetBtn = document.querySelector('#resetBtn')

let interval
let minutes = 0
let seconds = 0
let miliseconds = 0
let isPaused = false

function startTimer(){
    interval= setInterval(() =>{
        if(!isPaused){
            miliseconds += 10

            if(miliseconds === 1000){
                seconds++
                miliseconds = 0
            }

            if(seconds === 60){
                minutes++
                seconds = 0
            }

            minutesEl.innerHTML =  formatTime(minutes)
            secondsEl.innerHTML = formatTime(seconds)
            milisecondsEl.innerHTML = miliseconds
        }

    },10)
}

function pauseTimer(){
    isPaused = true
}

function resumeTimer(){
    isPaused = false
}

function resetTimer(){
    clearInterval(interval)
    minutes = 0
    seconds = 0
    miliseconds = 0

    minutesEl.innerHTML = '00'
    secondsEl.innerHTML = '00'
    milisecondsEl.innerHTML = '000'
}

function formatTime(time){
    return time < 10 ? `0${time}` : time
}