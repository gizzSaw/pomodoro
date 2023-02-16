import { alarm } from "./alarm.js"
import { state } from "./state.js"
import { addZero } from "./util.js"

const minutesElem = document.querySelector('.time__minutes')
const secondsElem = document.querySelector('.time__seconds')

export const showTime = seconds => {
    seconds = seconds % 60
    minutesElem.textContent = addZero(Math.floor(seconds / 60))
    secondsElem.textContent = addZero(seconds % 60)
}

export const startTimer = () => {
    state.timeLeft -= 1 //обратный отсчёт в секундах
    //отобразить на странице
    showTime(state.timeLeft)
    console.log('state.timeLeft', state.timeLeft)
    if (state.timeLeft > 0 && state.isActive) { //перезапуск функции из функции, пока не кончится время 
        state.timerId = setTimeout(startTimer, 1000)
    }
    if (state.timeLeft <= 0) {
        alarm() //оповестить что время вышло
    }
}