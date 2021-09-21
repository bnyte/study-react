import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    render() {
        return (
            <div>
                <button onClick={this.get9000OPort}>获取9000端口服务器的数据</button>
            </div>
        )
    }

    get9000OPort = () => {
        axios.get("http://localhost:3000/api1/students").then((response) => {
            console.log(response.data);
        })
    }
}
