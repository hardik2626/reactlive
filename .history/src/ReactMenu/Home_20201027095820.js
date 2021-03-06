import React from 'react'
import Banner from '../images/mainBanner.svg'

const Home = () => {
    return (
        <div>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        Grow Your Business with <strong className="brand-name">AureateLabs </strong>
                                    </h1>
                                    <h2 className="my-3">
                                        We are the Team of the Talented Developer Making Website
                                    </h2>
                                    <div className="mt-3">
                                        <a className="btn btn-outline-info">Get Started</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={Banner} className="img-fluid animated" alt="logo" width="90%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
