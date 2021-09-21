import React, { Component } from 'react'

import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
    
    // 初始化状态
    state = {"users": []}

    render() {
        const {users} = this.state
        return (
            <div className="container">
            
                {/* 搜索组件 */}
                <Search getUsers={this.getUsers} />

                {/* 用户列表组件 */}
                <List users={users} />
            </div>
        )
    }

    getUsers = (users) => {
        this.setState({"users": users})
    }
}
