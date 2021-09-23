import React, { Component } from 'react'

export default class Show extends Component {
    render() {
        const {sum} = this.props
        console.log("Show.sum", sum);
        return (
            <div>
                现在计算的总和为：{sum}
            </div>
        )
    }
}
