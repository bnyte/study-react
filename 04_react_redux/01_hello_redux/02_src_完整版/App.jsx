import React, { Component } from 'react'

import Calculator from './components/Calculator'
import Show from './components/Show'

export default class App extends Component {

    render() {
        return (
            <div>
                <Show />
                <Calculator />
            </div>
        )
    }

}
