import React from 'react'
import { NavLink } from 'react-router-dom'

const GalleryCard = (props) => {
    return (
        <>
           <div className="col-lg-3 col-md-4 col-6">
                <NavLink to="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src={props.imgsrc} alt="sa" />
                </NavLink>
            </div> 
        </>
    )
}

export default GalleryCard
