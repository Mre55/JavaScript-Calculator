
import React from 'react'
import './JavaScriptCalculator.css'

class JavaScriptCalculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentInput: 0,
            prevInput: "",
            dotCount: 0,
            lastVal: '',
            count: 0,
            finalAns: ''
        }
        this.inputHandler = this.inputHandler.bind(this);
        this.handleMath = this.handleMath.bind(this);
    }

    handleMath(stringExpression) {
        console.log('stringExpression ', stringExpression)
        this.setState({
            currentInput: eval(stringExpression),
            prevInput: eval(stringExpression)
        })
    }

    inputHandler(e) {

        let para = e.target.innerText;

        if (para === '+' || para === '*' || para === '/' || para === '-') {
            this.setState({
                lastVal: para
            })
        }

        switch (para) {

            case 'AC':
                this.setState({
                    currentInput: 0,
                    prevInput: "",
                    dotCount: 0,
                    lastVal: ''
                })
                break;

            case '=':
                let equal = this.state.prevInput;
                this.handleMath(equal);
                break;

            case '+':

                if (this.state.lastVal !== '+' && this.state.lastVal !== '') {
                    if (this.state.count >= 1) {
                        this.setState(prev => {
                            let newVl = prev.prevInput.slice(0, prev.prevInput.length - 2) + prev.lastVal;
                            return {
                                currentInput: '+',
                                prevInput: newVl,
                                dotCount: 0,
                                count: 0
                            }
                        })
                    } else {                    
                        this.setState(prev => {
                            let newVl = prev.prevInput.slice(0, prev.prevInput.length - 1) + prev.lastVal;
                            return {
                                currentInput: '+',
                                prevInput: newVl,
                                dotCount: 0,
                            }
                        })
                    }
                } else if(this.state.lastVal === '+') {
                    this.setState(prev => ({
                        currentInput: '+',
                        prevInput: prev.prevInput,
                        dotCount: 0,
                    }))
                } else {
                    this.setState(prev => ({
                        currentInput: '+',
                        prevInput: prev.prevInput + para,
                        dotCount: 0,
                    }))
                }
                break;

            case '-':
                if (this.state.lastVal !== '-' && this.state.lastVal !== '') {
                    this.setState(prev => ({
                        currentInput: '-',
                        prevInput: prev.prevInput + para,
                        dotCount: 0,
                        count: prev.count + 1
                    }))
                } else {
                    this.setState(prev => ({
                        currentInput: '-',
                        prevInput: prev.prevInput + para,
                        dotCount: 0
                    }))
                }
                break;

            case '*':

                if(this.state.finalAns !== '') {
                    this.setState(prev => ({
                        currentInput: '*',
                        prevInput: this.state.finalAns + para,
                        dotCount: 0,
                    }))
                } else if (this.state.lastVal !== '*' && this.state.lastVal !== '') {
                    if (this.state.count >= 1) {
                        this.setState(prev => {
                            let newVl = prev.prevInput.slice(0, prev.prevInput.length - 2) + prev.lastVal;
                            return {
                                currentInput: '*',
                                prevInput: newVl,
                                dotCount: 0,
                                count: 0
                            }
                        })
                    } else {                    
                        this.setState(prev => {
                            let newVl = prev.prevInput.slice(0, prev.prevInput.length - 1) + prev.lastVal;
                            return {
                                currentInput: '*',
                                prevInput: newVl,
                                dotCount: 0,
                            }
                        })
                    }
                } else if(this.state.lastVal === '*') {
                    this.setState(prev => ({
                        currentInput: '*',
                        prevInput: prev.prevInput,
                        dotCount: 0,
                    }))
                } else {
                    this.setState(prev => ({
                        currentInput: '*',
                        prevInput: prev.prevInput + para,
                        dotCount: 0,
                    }))
                }
                break;

            case '/':

                if (this.state.lastVal !== '/' && this.state.lastVal !== '') {
                    if (this.state.count >= 1) {
                        this.setState(prev => {
                            let newVl = prev.prevInput.slice(0, prev.prevInput.length - 2) + prev.lastVal;
                            return {
                                currentInput: '/',
                                prevInput: newVl,
                                dotCount: 0,
                                count: 0
                            }
                        })
                    } else {                    
                        this.setState(prev => {
                            let newVl = prev.prevInput.slice(0, prev.prevInput.length - 1) + prev.lastVal;
                            return {
                                currentInput: '/',
                                prevInput: newVl,
                                dotCount: 0,
                            }
                        })
                    }
                } else if(this.state.lastVal === '/') {
                    this.setState(prev => ({
                        currentInput: '/',
                        prevInput: prev.prevInput,
                        dotCount: 0,
                    }))
                } else {
                    this.setState(prev => ({
                        currentInput: '/',
                        prevInput: prev.prevInput + para,
                        dotCount: 0,
                    }))
                }

                break;

            case '0':
                if (this.state.currentInput[0] !== '0') {
                    this.setState(prev => ({
                        currentInput: prev.prevInput + para,
                        prevInput: prev.prevInput + para
                    }))
                } else {
                    this.setState({
                        currentInput: para,
                        prevInput: para
                    })
                }
                break;

            case '.':
                if (this.state.dotCount === 0) {
                    this.setState(prev => ({
                        currentInput: prev.prevInput + '.',
                        prevInput: prev.prevInput + para,
                        dotCount: prev.dotCount + 1
                    }))
                }
                break;

            case para:
                this.setState(prev => ({
                    currentInput: prev.prevInput + para,
                    prevInput: prev.prevInput + para,
                    lastVal: ''
                }))
                break;
        }
    }

    render() {

        return (

            <div className="container">

                <div className="calulator">

                    <div className="input">
                        {this.state.prevInput}
                    </div>

                    <div id="display">
                        {this.state.currentInput}
                    </div>

                    <div className="ac-div-mul">
                        <button id="clear" onClick={this.inputHandler} style={{ width: 160, height: 65 }}>AC</button>
                        <button id="divide" onClick={this.inputHandler} style={{ width: 80, height: 65 }}>/</button>
                        <button id="multiply" onClick={this.inputHandler} style={{ width: 80, height: 65 }}>*</button>
                    </div>

                    <div className="sev-eigh-nin-sub" style={{ marginLeft: 5 }}>
                        <button id="seven" onClick={this.inputHandler} style={{ width: 80, height: 65 }}>7</button>
                        <button id="eight" onClick={this.inputHandler} style={{ width: 80, height: 65 }}>8</button>
                        <button id="nine" onClick={this.inputHandler} style={{ width: 80, height: 65 }}>9</button>
                        <button id="subtract" onClick={this.inputHandler} style={{ width: 80, height: 65 }}>-</button>
                    </div>

                    <div className="fou-fiv-si-add" style={{ marginLeft: 5 }}>
                        <button id="four" onClick={this.inputHandler} style={{ width: 80, height: 65 }}>4</button>
                        <button id="five" onClick={this.inputHandler} style={{ width: 80, height: 65 }}>5</button>
                        <button id="six" onClick={this.inputHandler} style={{ width: 80, height: 65 }}>6</button>
                        <button id="add" onClick={this.inputHandler} onClick={this.inputHandler} style={{ width: 80, height: 65 }}>+</button>
                    </div>

                    <div className="one-two-three" style={{ marginLeft: 5 }}>
                        <div>
                            <button id="one" onClick={this.inputHandler} style={{ width: 80, height: 65 }}>1</button>
                            <button id="two" onClick={this.inputHandler} style={{ width: 80, height: 65 }}>2</button>
                            <button id="three" onClick={this.inputHandler} onClick={this.inputHandler} style={{ width: 80, height: 65 }}>3</button>
                        </div>
                        <button id="equals" onClick={this.inputHandler} style={{ width: 80, height: 130 }}>=</button>
                    </div>

                    <div className="zero-dec-equ" style={{ marginLeft: 5 }}>
                        <button id="zero" onClick={this.inputHandler} style={{ width: 160, height: 65 }}>0</button>
                        <button id="decimal" onClick={this.inputHandler} style={{ width: 80, height: 65 }}>.</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default JavaScriptCalculator;