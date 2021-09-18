import React, { Component } from 'react'
import InputFlower from './components/inputFlower'
import './App.less'
import List from './components/list'

export default class App extends Component {
    render() {
        return (
            <div className="appBox">
                <hr />
                <InputFlower />
                <List />
            </div>
        )
    }
}
