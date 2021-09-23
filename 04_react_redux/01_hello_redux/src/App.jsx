import React, { Component } from 'react'

import Calculator from './components/Calculator'
import Show from './components/Show'

export default class App extends Component {

    state = {sum: 0}

    render() {

        const {sum} = this.state

        return (
            <div>
                <Show sum={sum} />
                <Calculator sum={sum} incrementSum={this.incrementSum} decraseSum={this.decraseSum} />
            </div>
        )
    }

    /**
     * 为当前sum加传入的指定值 
     * @param {*} incrementNum 需要加的值
     */
    incrementSum = (incrementNum) => {
        let {sum} = this.state
        sum += incrementNum
        this.setState({sum})
    }

    /**
     * 为当前sum减传入的指定值
     * @param {*} deCraseSum 需要减的值
     */
    decraseSum = (deCraseSum) => {
        let {sum} = this.state
        sum -= deCraseSum
        this.setState({sum})
    }
}
