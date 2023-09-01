import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>

            {/* navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark " style={{ backgroundColor: "#DCE7E9" }}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">ArtGallery</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <NavLink className="nav-link" aria-current="page" to="/">
                                Home
                            </NavLink>

                            <NavLink className="nav-link" aria-current="page" to="/artgallery">
                                Artists
                            </NavLink>

                            <li className="nav-item dropdown">
                                <NavLink
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Collections
                                </NavLink>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li>
                                        <NavLink className="dropdown-item" to="/classical">
                                        Classic Paintings 
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/popart">
                                        Pop Art
                                        </NavLink>
                                    </li>
                                    <NavLink className="dropdown-item" to="/nature">
                                    Nature and Wildlife 
                                        </NavLink>
                                    <li>
                                    </li>
                                    <NavLink className="dropdown-item" to="/modernart">
                                    Modern Art 
                                        </NavLink>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                </ul>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
