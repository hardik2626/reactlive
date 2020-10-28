import React from 'react'
import GalleryCard from './GalleryCard'
import GalleryData from './GalleryData'

const Gallery = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Gallery</h1>
            </div>
            
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            <div className="row text-center text-lg-left">
                                {
                                    GalleryData.map((val, ind) => {
                                        return <GalleryCard key={ind} imgsrc={val.imgsrc} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery
