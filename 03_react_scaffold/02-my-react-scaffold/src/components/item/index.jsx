import React, { Component } from 'react'

import './index.less'

export default class Item extends Component {

    // 默认所有属性没有被移入
    state = {mouse: false}

    render() {
        const {todo} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse ? "#ddd" : "white"}} onMouseEnter={this.handlerMouseMove(true)} onMouseLeave={this.handlerMouseMove(false)} >
                <label>
                    {/* 添加鼠标移入高亮显示，true为移入(onMouseEnter)，false为移出(onMouseLeave) */}
                    <input type="checkbox" checked={todo.status} onChange={this.handlerChecked(todo)} />
                    <span>{todo.name}</span>
                </label>
                <button onClick={this.handlerDelete(todo.id)} className="btn btn-danger" style={{display: mouse ? "block" : "none"}}>删除</button>
            </li>
        )
    }

    handlerMouseMove = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    handlerChecked = (todo) => {
        return (event) => {
            let tmpTodo = {...todo, status: event.target.checked}
            this.props.updateTodo(tmpTodo)
        }
    }

    handlerDelete = (id) => {
        return () => {
            this.props.deleteTodoForId(id)
        }
    }
}