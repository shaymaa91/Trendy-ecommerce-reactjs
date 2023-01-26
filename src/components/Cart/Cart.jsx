import React,{useContext} from 'react'
import { CartItem } from './CartItem';
import { Link } from 'react-router-dom';
import CartContext from '../Context/CartContext'

export const Cart = () => {
  let cartList = [1];
  let test = useContext(CartContext);
  console.log("cnxt",test);


  return (
    <>

      <div className="cartList text-center">
        <div className="list-body">
          <h1 className='mt-3 fs-3 text-center'>Shopping List</h1>
          {cartList.map((prodId) => {
            return <CartItem key={prodId} prodId={prodId} />
          })}
        </div>
        <div className="checkout">
          {cartList.length>0?<button className='btn btn-outline-danger fs-3 fw-bold'>Check Out</button>:<div className='mt-5'>Your Cart is Empty! go to Products to add some <Link className='btn btn-dark' to="/products">View Products</Link></div>}
          

        </div>
      </div>

    </>
  )
}
