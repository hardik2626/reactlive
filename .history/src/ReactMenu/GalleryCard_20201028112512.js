import React from 'react'

const GalleryCard = (props) => {
    return (
        <>
           <div className="col-lg-3 col-md-4 col-6">
                <NavLink to="#" className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" imgsrc={props.imgsrc} alt="" />
                </NavLink>
            </div> 
        </>
    )
}

export default GalleryCard
