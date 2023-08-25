import React, { Component } from 'react'
import Chairs from './Chairs'
import { connect } from 'react-redux'

class PositionChair extends Component {


    renderListChairs = () => {
        return this.props.listChairs.map((element, index) => {
            if (element.hang === "") { return }
            return <Chairs key={index} element={element} dispatch={this.props.dispatch} />
        })
    }
    render() {
        return (
            <div className="text-center">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>10</th>
                            <th>11</th>
                            <th>12</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderListChairs()}
                    </tbody>
                </table>
                <div className="screen">
                    <h2 className="wthree">Screen Here</h2>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listChairs: state.movies.listChairs
    }
}
export default connect(mapStateToProps)(PositionChair)
