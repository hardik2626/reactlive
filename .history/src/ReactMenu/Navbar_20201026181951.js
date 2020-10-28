import React from 'react'

const Navbar = () => {
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">

                
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" href="#">Hardik Devani</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" href="#">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#">Service</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" href="#">About</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" href="#">Contact</NavLink>
                        </li>

                        

                        
                    </ul>

                </div>
            </nav>
            </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
