const time = document.querySelector( "#Time" )
const btnPlay = document.querySelector( "#Play" )
const btnPause = document.querySelector( "#Pause" )
const bntStop = document.querySelector( "#Stop" )

var inter = 0
var minuts = 0
var seconds = 0
var miliseconds = 0

var played = false
var paused = false

const CycleTime = ()=> {
    if( paused ){
        return null
    }

    miliseconds += 1

    if( miliseconds == 100){
        seconds += 1
        miliseconds = 0
    }

    if( seconds == 60 ){
        minuts += 1
        seconds = 0
    }

    time.textContent = ceroStart( minuts ) + " : " + ceroStart( seconds ) + " : " + ceroStart( miliseconds )
}

const Play = ()=>{
    if( !played ){
        played = true
        inter = setInterval( CycleTime, 10 )
    }
}

const Pause = ()=>{
    if( paused ){
        paused = false
    }else{
        paused = true
    }
}

const Stop = ()=>{
    clearInterval( inter )
    inter = 0
    played = false
    paused = false
    hours = 0
    minuts = 0
    seconds = 0
    miliseconds = 0
    time.textContent = "00 : 00 : 00"
}

const ceroStart = value => {
    if( value < 10 ){
        return  "0" + value
    }
    return value
}

btnPlay.addEventListener( "click", e=> Play() )
btnPause.addEventListener( "click", e=> Pause() )
bntStop.addEventListener( "click", e=> Stop() )