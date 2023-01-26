import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = ({ userInfo, setUserInfo }) => {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-light shadow p-3 sticky-md-top bg-white">
                <div className="container">
                    <Link className="navbar-brand fs-4 fw-bold" to="/">Trendy</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {userInfo ? <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact">Contact</Link>
                            </li>

                        </ul> : ''}

                        <div className="buttons ms-auto">
                            {!userInfo ? <><Link to='/login' className='btn btn-outline-dark ms-2'> <i className="fa fa-sign-in" aria-hidden="true"></i> Login</Link>
                                <Link to='/register' className='btn btn-outline-dark ms-2'> <i className="fa fa-user-plus" aria-hidden="true"></i> Register</Link></> : <div className='m-auto'><Link to='/cart' className='btn btn-outline-dark ms-2 '> <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart(0)</Link>
                                <Link to='/login' onClick={() => { setUserInfo(null); localStorage.removeItem('token') }} className='btn btn-outline-dark ms-2 '> <i className="fa fa-sign-out" aria-hidden="true"></i> Logout</Link></div>
                            }

                        </div>

                    </div>
                </div>
            </nav>

        </>
    )
}
