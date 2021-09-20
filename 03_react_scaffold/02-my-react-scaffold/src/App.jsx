import React, { Component } from 'react'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './App.less'

export default class App extends Component {

    // 初始化状态 init state
    state = {
        todos:[
            {
                id: "001",
                name: "吃饭",
                status: true
            },
            {
                id: "002",
                name: "睡觉",
                status: true
            },
            {
                id: "003",
                name: "上网",
                status: false
            }
        ]
    }

    render() {

        const {todos} = this.state

        return (
            <div className="todo-container">
                <div className="todo-wrap">
                
                    {/* header */}
                    <Header addTodo={this.addTodo} />

                    {/* list */}
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodoForId={this.deleteTodoForId} />

                    {/* footer */}
                    <Footer todos={todos} checkedAll={this.checkedAll} deleteAllChecked={this.deleteAllChecked} />
                
                </div>
            </div>
        )
    }

    /**
     * 获取header组件需要更新的todo对象
     * @param {*} data 接受到的数据
     */
    addTodo = (data) => {
        // 获取当前状态中的值
        let {todos} = this.state
        // 在数组中的最前方插入值
        todos.unshift(data)
        // 更新状态
        this.setState({"todos": todos})
    }

    /**
     * 更新某个指定todo
     * @param {*} data 获取到要更新的todo项
     */
    updateTodo = (data) => {
        let {todos} = this.state
        todos = todos.map((todo, index) => {
            if (todo.id === data.id) {
                todos[index] = data
                return todos[index]
            }
            else {
                return todo
            }
            
        })
        this.setState({todos})
    }

    /**
     * 从todos列表中通过id删除指定todo
     * @param {*} id todoId
     */
    deleteTodoForId = (id) => {
        let {todos} = this.state
        todos = todos.filter((todo) => {
            return id !== todo.id
        }) 
        this.setState({todos})
    }

    /**
     * 全选或全不选当前所有item
     * @param {*} isChecked true为全选，false为全不选
     */
    checkedAll = (isChecked) => {
        let {todos} = this.state
        todos = todos.map((todo) => {
            return isChecked ? {...todo, status: true} : {...todo, status: false}
        })
        this.setState({todos})
    }

    /**
     * 删除所有选中的
     */
    deleteAllChecked = () => {
        let {todos} = this.state
        todos = todos.filter((todo) => {
            return todo.status !== true
        })
        this.setState({todos})
    }
}
