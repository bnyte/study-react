import React, { Component } from 'react'
import './index.less'

/**
 * 列表项组件
 */
export default class Item extends Component {
    render() {
        return (
            <div>
                <input type="checkbox" name="task" className="itemCheck" />
                <span>test</span>   
            </div>
        )
    }
}
