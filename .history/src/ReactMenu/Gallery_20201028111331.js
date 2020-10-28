import React from 'react'
import { NavLink } from 'react-router-dom'

const Gallery = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Gallery</h1>
            </div>
            <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">Thumbnail Gallery</h1>

            

            <div className="row text-center text-lg-left">

                <div className="col-lg-3 col-md-4 col-6">
                <NavLink to="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="" />
                    </NavLink>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                <NavLink to="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/aob0ukAYfuI/400x300" alt="" />
                    </NavLink>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                <NavLink to="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/EUfxH-pze7s/400x300" alt="" />
                    </NavLink>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                <NavLink to="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/M185_qYH8vg/400x300" alt="" />
                    </NavLink>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                <NavLink to="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/sesveuG_rNo/400x300" alt="" />
                    </NavLink>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                <NavLink to="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/AvhMzHwiE_0/400x300" alt="" />
                    </NavLink>
                </div>
                
                
            </div>
        </>
    )
}

export default Gallery
