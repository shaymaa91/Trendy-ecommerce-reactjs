import React from 'react'

export const CartItem = ({ prodId }) => {
    return (
        <>
            <div className="row mx-3 justify-content-center ">
                <div className="col-md-6 my-3 p-3 border border-3 border-dark rounded d-flex justify-content-between">
                    <div className='item-image'>
                        <img src='./logo192.png' alt='test' height={50} width="50px" />

                    </div>
                    <div className='item-price fs-5 fw-bold'>$129</div>

                    <div className='qtn d-flex align-items-center fw-bolder'>
                        <button className='btn btn-outline-dark'>-</button>
                        <div className='qty mx-3'>0</div>
                        <button className='btn btn-outline-dark'>+</button>
                    </div>
                </div>
                
            </div>
        </>

    )
}
