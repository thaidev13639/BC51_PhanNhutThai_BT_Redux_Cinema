import React, { Component } from 'react'
import { connect } from 'react-redux'

class TablePayment extends Component {

    renderContent = () => {
        return this.props.listChairs.map((element) => {
            return element.danhSachGhe.map((chair) => {
                if (chair.daChon) {
                    return <tr key={chair.soGhe}>
                        <td>{chair.soGhe}</td>
                        <td>{chair.gia.toLocaleString()} vnđ</td>
                        <td
                            onClick={() => this.props.dispatch({
                                type: "DELETE_CHAIR",
                                payload: {
                                    chair,
                                    hang: element.hang,
                                },
                            })}
                            className="delete">X</td>
                    </tr>
                } else {
                    return
                }
            });
        })
    }
    totalPayment = () => {
        if (this.props.listPayment) {
            return this.props.listPayment.reduce((total, element) => {
                if (element.daChon) {
                    return total += element.gia
                    
                }
            }, 0)
        }
    }
    totalChair = () => {
        if (this.props.listPayment) {
            return this.props.listPayment.reduce((total, element) => {
                return total += `${element.soGhe},  `
            }, "")
        }
    }
    render() {
        return (
            <>
                <div><h1 style={{ fontSize: "1.6em" }}>Chair Of Your Choice</h1></div>
                <ul className="seat_w3ls">
                    <li className="smallBox greenBox">Selected Seat</li>
                    <li className="smallBox redBox">Reserved Seat</li>
                    <li className="smallBox emptyBox">Empty Seat</li>
                </ul>
                <table className="order">
                    <thead>
                        <tr>
                            <th>Chair</th>
                            <th>Price</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderContent()}
                    </tbody>
                </table>
                <p className='text-white pt-5'>Your Order : {this.totalChair()}</p>
                <p className='text-white'>Total : {this.totalPayment().toLocaleString()} vnđ</p>
                <button className="btn btn-success payment"
                    onClick={() => this.props.dispatch({
                        type: "PAYMENT"
                    })}>Payment</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listChairs: state.movies.listChairs,
        listPayment: state.movies.listPayment
    }
}
export default connect(mapStateToProps)(TablePayment) 
