const WORK_TIME = 3           // минут
const BREAK_TIME = 1           // минут
const RELAX_TIME = 2         // минут


export const state = {
    work: WORK_TIME,
    break: BREAK_TIME,
    relax: RELAX_TIME,
    status: 'work',
    count: 4,                   //колличество помадорок до длительного отдыха 
    timeLeft: WORK_TIME * 60,   //потрачено времени
    isActive: false,
    timerId: 0                  //айдишник таймера, для сборса 
}