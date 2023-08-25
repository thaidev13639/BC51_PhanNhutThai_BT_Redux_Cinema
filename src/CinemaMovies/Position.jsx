import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class Position extends Component {
    
    renderchair = (data) => {
        return data.danhSachGhe.map((element) => {
            return <td key={element.soGhe}>
                <input
                    type="checkbox" checked={element.daChon} className={`seats ${element.daDat ? "bg-danger" : ""}` } disabled={element.daDat}
                    onChange={() => this.props.dispatch({
                        type: "CHOICE_CHAIR",
                        payload: {
                            element,
                            hang: data.hang,
                        }
                    })}
                />
            </td>
        })
    }

    render() {
        // console.log(this.props.element)

        return (
            <>
                {this.renderchair(this.props.element)}
            </>
        )
    }
}


// export default connect()(Position)
