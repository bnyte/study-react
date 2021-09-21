import React, { Component } from 'react'

import User from '../User'

import './index.less'

export default class List extends Component {
    render() {
        const {users} = this.props
        console.log(users);
        return (
            <div className="row">

                {/* 用户列表组件 */}
                {
                    users.map((user) => {
                        return <User key={user.id} user={user} />
                    })
                }
                

            </div>
        )
    }
}
