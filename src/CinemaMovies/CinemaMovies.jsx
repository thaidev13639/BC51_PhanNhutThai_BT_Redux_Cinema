import React, { Component } from 'react'
import "../CinemaMovies/CinemaMovie.css"


export default class CinemaMovies extends Component {
    render() {
        return (
            <div className="d-flex container py-5" style={{ height: "100vh" }}>
                <div className="text-white">
                    <div className="container">
                        <div className="contain">
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
                                            <th></th>
                                            <th>7</th>
                                            <th>8</th>
                                            <th>9</th>
                                            <th>10</th>
                                            <th>11</th>
                                            <th>12</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>A</td>
                                            <td><input type="checkbox" className="seats btn-danger" defaultValue="1" disabled="false" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="screen">
                                    <h2 className="wthree">Screen Here</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-3' style={{ backgroundColor: "rgba(128, 128, 128, 0.34)" }}>
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
                            <tr>
                                <td>1</td>
                                <td>200$</td>
                                <td className="delete">X</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className='text-white pt-5'>Your Chair you order: A1 A2 A3</p>
                    <p className='text-white'>Total: 200$</p>
                    <button className="btn btn-success payment">Payment</button>
                </div>
            </div>

        )
    }
}
