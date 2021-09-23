import React, { Component } from 'react'

import { calculatorStore } from "../../redux/store"

export default class Show extends Component {

    render() {
        return (
            <div>
                现在计算的总和为：{calculatorStore.getState()}
            </div>
        )
    }
}
