import React, { Component } from 'react'
import Position from './Position'

export default class Chairs extends Component {
    render() {
        // console.log(this.props.element)
        return (
            <>
                <tr>
                    <td>{this.props.element.hang}</td>
                    <Position element={this.props.element} dispatch={this.props.dispatch} />
                </tr>

            </>
        )
    }
}

