import React, { Component } from 'react'

import './index.less'

export default class Footer extends Component {

    render() {
        let total = this.props.todos.length

        let successTotal = this.props.todos.reduce((pre, current) => {return pre + (current.status ? 1 : 0)}, 0)

        return (
            <div className="todo-footer">
                <label>
                    <input onChange={this.checkedAll} checked={total === successTotal && total !== 0 ? true : false} type="checkbox"/>
                </label>
                <span>
                    <span>已完成{successTotal}</span> / 全部{total}
                </span>
                <button onClick={this.deleteAllChecked} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }

    /**
     * 全选或全不选
     */
    checkedAll = (event) => {
        let {checked} = event.target
        this.props.checkedAll(checked)
    }

    /**
     * 删除所有已完成
     */
    deleteAllChecked = () => {
        this.props.deleteAllChecked()
    }

}
