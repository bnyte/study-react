import React, { Component } from 'react'
import './index.less'

export default class InputFlower extends Component {
    render() {
        return (
            <div className="inputBox">
                <input type="text" onKeyDown={this.downEnter} placeholder="输入吧" />
            </div>
        )
    }

    // enter键盘监听事件
    downEnter = (event) => {
        const keyCode = event.keyCode
        if (keyCode === 13)
            this.handlerEnter(keyCode)
    }

    // 处理回车事件
    handlerEnter(keyCode) {
        console.log("你按了回车键");
    }
}
