import React from 'react'
import './App.css'

class counter extends React.Component {
    constructor() {
        super()
        this.state = {
            msg: 10,
            reg: ""
        }
    }
    Decrement() {
        if (this.state.msg > 0) {
            this.setState({
                msg: this.state.msg - 1,
                reg: ""
            })
        }
        else {
            this.setState({
                reg: "you reached the minimum limit"
            })
        }
    }
    increment() {
        if (this.state.msg < 50) {
            this.setState({
                msg: this.state.msg + 1,
                reg: ""
            })
        }
        else {
            this.setState({
                reg: "you reached the maximum limit"
            })
        }
    }

    render() {
        return (
            <>
                <center>
                    <h1 id="he">Interactive Counter</h1><br/>
                    <h1>{this.state.msg}</h1>
                    <h2>{this.state.reg}</h2>
                    <button onClick={this.Decrement.bind(this)}>-</button>&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
                    <button onClick={this.increment.bind(this)}>+</button>
                </center>
            </>
        );
    }
}
export default counter;