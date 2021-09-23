import React, { Component } from 'react'

import Calculator from './containers/Calculator'
import Show from './containers/Show'

import {calculatorStore} from "./redux/store"

export default class App extends Component {

    render() {
        return (
            <div>
                <Show store={calculatorStore} />
                <Calculator store={calculatorStore} />
            </div>
        )
    }

}
