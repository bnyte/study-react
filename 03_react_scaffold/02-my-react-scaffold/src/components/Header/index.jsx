import React, { Component } from 'react'
import {nanoid} from 'nanoid'

import './index.less'

export default class Header extends Component {
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.keyUpHandler} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }

    /**
     * 键盘被按下处理方法
     * @param event 当前触发键盘按下的事件对象 (current trigger key up event object)
     */
    keyUpHandler = (event) => {
        const {target, keyCode} = event
        // 交给处理键盘按出函数处理
        this.handlerKeyUp(target, keyCode)
    }

    /**
     * 键盘被按下之后获取到的目标DOM元素对象以及被按下的键盘code处理方法
     * @param {*} target 当前触发事件的DOM元素
     * @param {*} keyCode 当前触发键盘事件的键盘code
     * @returns 
     */
    handlerKeyUp = (target, keyCode) => {
        switch (keyCode) {
            // 处理回车
            case 13:
                this.handlerEnter(target)
                break
            // 处理默认
            default :
                return
        }
    }

    /**
     * 回车被按下的处理方法
     * @param {*} target 当前触发事件的DOM元素
     */
    handlerEnter = (target) => {
        // 判断不能输入非空任务名称
        if (target.value.trim() === null || target.value.trim() === "") 
            return alert("任务名称不能为空")

        // 拼接todo对象
        let todo = {
            id: nanoid(),
            name: target.value,
            status: false
        }
        
        // 更新todo
        this.props.addTodo(todo)

        // 重置输入框
        target.value = ""
    }
}
