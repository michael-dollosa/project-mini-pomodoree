import React, { useEffect } from 'react'
import './timer.styles.scss'

const Timer = ({time, category}) => {
   
    const link = document.querySelector("link[rel~='icon']");

    //use effect is used to modify the document title
    useEffect(() => {
        switch(category) {
            case "pomodoro":
                document.title = formatTime(time) + " - Time to focus!"
                link.href = "/favicon.ico";
            break

            case "_break":
                document.title = formatTime(time) + " - Take a quick break"
                link.href = "/favicon-break.ico";
            break

            case "longbreak":
                document.title = formatTime(time) + " - Take a long break"
                link.href = "/favicon-longbreak.ico";
            break

            default:
                document.title = "Pomodoree - " + formatTime(time) 
        }
        
    }, [time, category, link])

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