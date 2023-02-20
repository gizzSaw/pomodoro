import { alarm } from "./alarm.js"
import { changeActiveBtn } from "./control.js"
import { state } from "./state.js"
import { addZero } from "./util.js"

const minutesElem = document.querySelector('.time__minutes')
const secondsElem = document.querySelector('.time__seconds')

export const showTime = seconds => {
    //seconds = seconds % 60
    minutesElem.textContent = addZero(Math.floor(seconds / 60))
    secondsElem.textContent = addZero(seconds % 60)
}

export const startTimer = () => {
    state.timeLeft -= 9 //обратный отсчёт в секундах исправить 
    showTime(state.timeLeft) //отобразить на странице
    
    if (state.timeLeft > 0 && state.isActive) { //перезапуск функции из функции, пока не кончится время 
        state.timerId = setTimeout(startTimer, 1000)
    }
    
    if (state.timeLeft <= 0) {
        alarm() //оповестить что время вышло

        if (state.status === 'work'){
            state.activeTodo.pomodoro += 1

            if(state.activeTodo.pomodoro % state.count) {
                state.status = 'break'
            } else {
                state.status = 'relax'
            }
        } else {
            state.status = 'work'
        }
        state.timeLeft = state[state.status] * 60

        changeActiveBtn(state.status)
        startTimer()
    }
}