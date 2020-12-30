import React from 'react'
import './button.styles.scss'

const TimerButton = ({ name, countdown, pause, toggle }) => (
    <div className="timer">
        <h3 onClick={ () => { toggle ? pause() : countdown() } }>{name}</h3>
    </div>
)

export default TimerButton