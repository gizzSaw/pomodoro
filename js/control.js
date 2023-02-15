import { startTimer } from "./timer.js"
import { state } from "./state.js"

const btnStart = document.querySelector('.control__btn_start')

export const initControl = () => {
    btnStart.addEventListener('click', () => {
        state.isActive = true
        btnStart.textContent = 'Пауза'
        startTimer()
    })
}