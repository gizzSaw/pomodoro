const audio = {
    work: new Audio('audio/dudu.mp3'),
    break: new Audio('audio/wave.mp3'),
    relax: new Audio('audio/august.mp3'),
}

export const alarm = () => {
    audio.play()
}