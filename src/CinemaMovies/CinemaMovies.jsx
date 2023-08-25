import React, { Component } from 'react'
import "../CinemaMovies/CinemaMovie.css"
import PositionChair from './PositionChair'
import TablePayment from './TablePayment'


export default class CinemaMovies extends Component {
    render() {
        return (
            <div className="d-flex container py-5">
                <div className="text-white">
                    <div className="container">
                        <div className="contain">
                            <PositionChair />
                        </div>
                    </div>
                </div>
                <div className='p-3' style={{ backgroundColor: "rgba(128, 128, 128, 0.34)" }}>
                    <TablePayment />
                </div>
            </div>

        )
    }
}
