import { showTime, startTimer } from "./timer.js"
import { state } from "./state.js"

const btnStart = document.querySelector('.control__btn_start')
const btnStop = document.querySelector('.control__btn_stop')

const stop = () => {
    clearTimeout(state.timerId)
    state.isActive = false
    btnStart.textContent = 'Старт'
    state.timeLeft = state[state.status] * 60
    showTime(state.timeLeft)
}

export const initControl = () => {
    btnStart.addEventListener('click', () => {
        if (state.isActive) {
            clearTimeout(state.timerId)
            state.isActive = false
            btnStart.textContent = 'Старт'
        } else {
            state.isActive = true
            btnStart.textContent = 'Стоп'
        }     
        startTimer()
    })

    btnStop.addEventListener('click', stop)
}