import React, { Component } from 'react'

import Item from '../Item'

import './index.less'

export default class List extends Component {
    render() {
        const {todos, updateTodo, deleteTodoForId} = this.props
        return (
            <ul className="todo-main">

                {/* item */}
                {
                    todos.map( todo => { 
                        return <Item todo={todo} key={todo.id} updateTodo={updateTodo} deleteTodoForId={deleteTodoForId} />
                    })
                }

            </ul>
        )
    }
}
