import React, { Component } from 'react'
import InputFlower from './components/inputFlower'
import './App.css'

export default class App extends Component {
    render() {
        return (
            <div className="appBox">
                <hr />
                <InputFlower />
            </div>
        )
    }
}
