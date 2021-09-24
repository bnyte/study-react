import React, { Component } from 'react'
import { Select, Button, message } from "antd"

import "antd/dist/antd.css"

const {Option} = Select

const selectNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export default class Calculator extends Component {

    state = {incrementNum: 0}

    render() {
        return (
            <div>
                <Select defaultValue="0" style={{ width: 120 }} onChange={this.handleChange}>
                    {
                        selectNum.map((number) => {
                            return <Option key={number} value={number}>{number}</Option>
                        })
                    }
                </Select>

                &nbsp;<Button onClick={this.increment}>+</Button>

                &nbsp;<Button onClick={this.decrase}>-</Button>

                &nbsp;<Button onClick={this.handleOddNumber}>和为基数时加1</Button>
                
                &nbsp;<Button onClick={this.handleAsyncIncr}>异步加1</Button>

            </div>
        )
    }

    handleChange = (value) => {
        this.setState({incrementNum: value})
    }

    increment = () => {
        const {incrementNum} = this.state
        const {increment} = this.props
        if (incrementNum === 0) {
            return message.warning('当前添加的数为0，这并不会发生任何改变')
        }
        increment(incrementNum)
    }

    decrase = () => {
        const {incrementNum} = this.state
        const {decrement} = this.props
        if (incrementNum === 0) {
            return message.warning('当前减少的数为0，这并不会发生任何改变')
        }
        decrement(incrementNum)
    }

    handleOddNumber = () => {
        const {incrementNum} = this.state
        const {increment} = this.props
        increment(incrementNum)
    }

    handleAsyncIncr = () => {
        const {incrementNum} = this.state
        const {incrementAsync} = this.props
        incrementAsync(incrementNum, 500)
    }

}
