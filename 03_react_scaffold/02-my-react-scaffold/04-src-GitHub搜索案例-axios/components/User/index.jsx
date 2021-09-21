import React, { Component } from 'react'

export default class User extends Component {
    render() {
        const {avatar_url, login, html_url} = this.props
        return (
            <div className="card">
                <a rel="noreferrer" href={html_url} target="_blank">
                <img src={avatar_url} alt="avatar" style={{width: "100px"}}/>
                </a>
                <p className="card-text">{login}</p>
            </div>
        )
    }
}
