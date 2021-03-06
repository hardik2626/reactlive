import React from 'react'
//import { NavLink } from 'react-router-dom'
import Banner from '../images/mainBanner.svg'
import Card from './Card'
const Service = () => {
    return (
        <div>
            <div className="my-5">
                <h1 className="text-center">Our Service</h1>
            </div>
            <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                               <Card />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Service
