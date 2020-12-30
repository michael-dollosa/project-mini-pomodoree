import React from 'react'

import Nav from './components/nav/nav.component'
import Timer from './components/timer/timer.component'
import TimerButton from './components/button/button.component'
import { FaCog } from "react-icons/fa";
//styles
import './App.styles.scss'
import Options from './components/options/options.component';

class App extends React.Component {
    state = {
        isActive: "pomodoro",
        totalTime: 1800,
        toggle: false,
        optionsToggle: false,
        pomodoro: "pomodoro",
        pomodoroTime: 30, //in minutes
        _break: "_break",
        _breakTime: 5, //in minutes
        longbreak: "longbreak",
        longbreakTime: 15, //in minutes

        //form
        pomodoroInput: 0,
        breakInput: 0,
        longbreakInput: 0
    }
    

    componentDidMount() {
        if(this.state.length){
            this.changeCategory(this.state.pomodoro)
        }
    }

    //used componentDidUpdate for changing current active total time in case it was changed via options
    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log(prevState.[prevState.isActive+"Time"], this.state.[prevState.isActive+"Time"])
        if(this.state.[prevState.isActive+"Time"] !== prevState.[prevState.isActive+"Time"]) {
            this.changeCategory(this.state.isActive, this.state.[prevState.isActive+"Time"])
        }
    }
    
    //function for start
    countdown = () => {
        this.setState({ toggle: true })
        this.clearId = setInterval(() => {
            
            this.setState(state => ({
            totalTime: this.state.totalTime - 1
            })
            
        )}, 1000)
    }

    //function for pause/clearInterval id
    pause = () => {
        this.setState({ toggle: false })
        clearInterval(this.clearId)
    }


    //setting state once category is changed
    changeCategory = (categoryName) => {
        this.setState({
            isActive: categoryName,
            totalTime: this.state.[categoryName+"Time"] * 60
        }, this.pause())
    
    }

    //toggle function for start-pause
    buttonToggle = () => {

        this.setState(state => ({
            //since initial toggle state is FALSE, I have considered that the first toggle change state will need countdown function to init
            toggle: !state.toggle
        }), () => {this.countdown()}) //automatically initialize countdown()

    }

    //toggle function for options
    optionsToggle = () => {
        this.setState(state => ({
            optionsToggle: !state.optionsToggle
        })) 

        if(this.state.toggle) {
            this.setState({toggle: false})
            this.pause()
        } 
    }

    //listender to update input State 
    inputListener = (input) => {
        const key = input.name
        const value = parseInt(input.value)

        this.setState({
            [key]: value
        })
        
    }

    //save options
    optionsSave = () => {
        if(this.state.pomodoroInput) {
            this.setState({
                pomodoroTime: this.state.pomodoroInput 
            })
        }
        if(this.state.breakInput) {
            this.setState({
                _breakTime: this.state.breakInput
            })
        }

        if(this.state.longbreakInput) {
            this.setState({
                longbreakTime: this.state.longbreakInput
            })
        }
        
        this.optionsToggle()
    }

    render() {
        const { totalTime, toggle, ...otherProps } = this.state

        return(
            <div className={"container " + [this.state.isActive + "BG"]}>
                <Options _optionsToggle={this.optionsToggle} inputListener={this.inputListener} optionsSave={this.optionsSave} pause={this.pause} countdown={this.countdown} {...otherProps}/>
                <div className="container-main">
                    <FaCog className="container-main__icon-gear" onClick={this.optionsToggle}/>
                    <Nav changeCategory={ this.changeCategory } pause={this.pause} {...otherProps} />
                    <Timer time={totalTime} category={this.state.isActive} />
                    <TimerButton name={ toggle ? "pause" : "start" } countdown={this.countdown} pause={this.pause} toggle={ toggle } />
                </div>
            </div>
        )
    }
}

export default App