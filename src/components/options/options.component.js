import React from 'react'
import './options.styles.scss'
import { FaRegTimesCircle } from "react-icons/fa";

const Options = ({ optionsToggle, _optionsToggle, optionsSave, inputListener, pomodoroTime, _breakTime, longbreakTime, longbreakInterval, pomodoroInput, breakInput, longbreakInput, longbreakintervalInput}) => {

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
                            <label>category</label> 
                            <label>minutes</label>
                        </li>
                        <li>
                            pomodoro 
                            <input 
                                type="number" 
                                //maxLength="2"
                                min="1"
                                max="2"
                                name="pomodoroInput"
                                value={pomodoroInput}
                                placeholder = {pomodoroTime}
                                onChange={(event) => inputListener(event.target)}
                            />
                            
                        </li>
                        <li>
                            break
                            <input 
                                type="number" 
                                min="1"
                                max="2"
                                name="breakInput"
                                placeholder = {_breakTime}
                                value={breakInput}
                                onChange={(event) => inputListener(event.target)}
                            /> 
                        
                        </li>
                        <li>
                            long break 
                            <input 
                                type="number" 
                                min="1"
                                max="2"
                                name="longbreakInput"
                                placeholder = {longbreakTime}
                                value={longbreakInput}
                                onChange={(event) => inputListener(event.target)}
                            /> 
                        </li>
                        <li>
                            <label>long break interval</label>
                            <input 
                                type="number" 
                                min="1"
                                max="2"
                                name="longbreakintervalInput"
                                placeholder = {longbreakInterval}
                                value={longbreakintervalInput}
                                onChange={(event) => inputListener(event.target)}
                            /> 
                        </li>
                        <li><p>Note: Time should be between 1 to 60 minutes.</p></li>
                    </ul>

                    <button onClick={() => optionsSave() }>save</button>
                </div>
            </div>
        </div>
    )
}

export default Options