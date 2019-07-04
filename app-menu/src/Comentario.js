import React, { Component } from 'react'

export default class Comentario extends Component {

    render() {
        return (
            <div>
                <label >{this.props.text}</label>
            </div>
        )
    }
}
