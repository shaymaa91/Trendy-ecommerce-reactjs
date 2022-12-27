import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';



export const Product = () => {
    let { id } = useParams();
    const [prodData, setProdData] = useState([]);
    let [loader, setLoader] = useState(false);
    console.log(loader)

    const getProductDetails = async () => {
        setLoader(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProdData(data);
        setLoader(false);
    }

    useEffect(() => {
        getProductDetails();
    }, [])

    const Loader = () => {
        return (
            <>
                
                <div className="col-md-6 mt-5 pt-3  ">
                    <Skeleton height={400} width={400} />
                </div>
                <div className="col-md-6 mt-5 ">
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={200}/>
                </div>
            </>)
    }

    const ProductDetails = () => {
        return (
            <>
                <div className="col-md-6 mt-5  ">
                    <img src={prodData.image} height="400px" width="400px" className="me-3" alt={prodData.title} />
                </div>
                <div className="col-md-6 mt-5 ">
                    <h4 className='fw-bolder text-uppercase text-black-50'>
                        {prodData.category}
                    </h4>
                    <h5 className='display-5'>
                        {prodData.title}
                    </h5>
                    <p className='lead fw-bold'><i className="fa fa-star-half-o" aria-hidden="true"></i>{prodData.rating && prodData.rating.rate} Likes <i className="fa fa-thumbs-o-up" aria-hidden="true"></i></p>
                    <h3 className='display-6 fw-bolder'>$ {prodData.price}</h3>
                    <p className='lead text-black-50'>{prodData.description}</p>
                    <Link className='btn btn-outline-danger' to="/cart">Add To Cart</Link>
                    <Link className='btn btn-danger ms-3' to="/cart">Go To Cart</Link>
                </div>
            </>)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    {loader ? <Loader /> : <ProductDetails />}
                </div>
            </div>

        </>
    )
}
