import React, { Component } from 'react'

import Calculator from './containers/Calculator'
import Show from './containers/Show'

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
