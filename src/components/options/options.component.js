import React from 'react'
import './options.styles.scss'
import { FaRegTimesCircle } from "react-icons/fa";

const Options = ({ optionsToggle, _optionsToggle, optionsSave, inputListener, pomodoroTime, _breakTime, longbreakTime, pause, countdown }) => {

    return (
        <div className={ optionsToggle ? "container-options" : "container-options display-none"}>
            <div className="background-opacity" onClick={() => _optionsToggle()}/>
            <div className="container-options__main">
                <div className="container-options__main__header">
                    <h3>TIME SETTING</h3>
                    <FaRegTimesCircle className="header__icon" onClick={() => _optionsToggle()}/>
                </div>
                <div className="container-options__main__body">
                    <ul className="body__list">
                        <li>
                            pomodoro 
                            <input 
                                type="text" 
                                maxLength="2"
                                name="pomodoroInput"
                                placeholder = {pomodoroTime}
                                onChange={(event) => inputListener(event.target)}
                            />
                        
                        </li>
                        <li>
                            break
                            <input 
                                type="text" 
                                maxLength="2"
                                name="breakInput"
                                placeholder = {_breakTime}
                                onChange={(event) => inputListener(event.target)}
                            /> 
                        
                        </li>
                        <li>
                            long break 
                            <input 
                                type="text" 
                                maxLength="2"
                                name="longbreakInput"
                                placeholder = {longbreakTime}
                                onChange={(event) => inputListener(event.target)}
                            /> 
                        </li>
                    </ul>

                    <button onClick={() => optionsSave() }>save</button>
                </div>
            </div>
        </div>
    )
}

export default Options