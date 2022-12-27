import React from 'react'

export const Login = () => {

    return (
        <>
            <div className='container'>
                <div className="row justify-content-center mt-5 pt-5">
                    <div className="col-md-6">
                        <h1 className='text-center mb-5 shadow-sm'>Login</h1>
                        <div className="mb-3 row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control-plaintext" id="staticEmail" placeholder='name@example.com' />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword" />
                            </div>
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-dark" type="button">Button</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
