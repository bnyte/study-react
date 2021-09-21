import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    // 输入的关键字节点DOM对象
    keyWordNode = {}

    render() {
        return (
            <section className="jumbotron">
              <h3 className="jumbotron-heading">Search Github Users</h3>
              <div>
                <input ref={(keyWordNode) => {this.keyWordNode = keyWordNode}} type="text" placeholder="enter the name you search"/>&nbsp;
                <button onClick={this.search}>Search</button>
              </div>
            </section>
        )
    }

    search = () => {
      const {value:keyWord} = this.keyWordNode
      axios.get(`/api/search/users?q=${keyWord}`).then(
        response => {
          this.props.getUsers(response.data.items)
        },
        error => {
          console.log("请求出错", error);
        }
        
      )
    }
}
