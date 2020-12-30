import React from 'react'
import './nav.styles.scss'

const Nav = ({ changeCategory, ...otherProps }) => {

    const { pomodoro, _break, longbreak, isActive } = otherProps

    return(
        <div className="nav">
            <ul>
                <li onClick={ (event) => changeCategory(pomodoro)} className={ isActive === "pomodoro" ? "pomodoro" : "" } >pomodoro</li>
                <li onClick={ (event) => changeCategory(_break) } className={ isActive === "_break" ? "break" : "" } >break</li>
                <li onClick={ (event) => changeCategory(longbreak)} className={ isActive === "longbreak" ? "longbreak" : "" } >long break</li>
            </ul>
        </div>
    )
}

export default Nav