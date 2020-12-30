import React from 'react'
import './timer.styles.scss'

const Timer = ({time}) => {
    
    

    const formatTime = (time) => {
        const min = Math.floor(time / 60)
        const sec = Math.floor(time % 60)

        return [
          min > 9 ? min : '0' + min,
          sec > 9 ? sec : '0' + sec
        ].filter(Boolean).join(':');
    }
    
    return (
        <div className="timer">
            <h1> {formatTime(time)} </h1>
        </div>
    )
}


    

export default Timer