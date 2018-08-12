import React, { Component } from 'react'

class Multiply extends Component {
    constructor() {
        super()

        this.state = {
            number1: 0,
            number2: 0,
            result: null
        }
    }

    numberUpdater1(val) {
        this.setState({ number1: val })
    }

    numberUpdater2(val) {
        this.setState({ number2: val })
    }

    Multiplier(number1, number2) {
        this.setState({ result: number1 * number2 })
    }




    render() {
        return (
            <div className="puzzleBox multiplyPB">
                <h4> Multiply</h4>
                <input className="inputLine" updateNumber={e => this.numberUpdater1(e.target.value)} />
                <input className="inputLine" updateNumber={e => this.numberUpdater2(e.target.value)} />
                <span className="resultBox">Result: {this.state.result}</span>
                <button className="confirmationButton" onClick={() => this.Multiplier(this.state.number1, this.state.number2)} />
            </div>
        );
    }
}


export default Multiply;