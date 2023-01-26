import React, { useState, useEffect } from 'react'
import styles from './Products.module.css'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';
import { Pagination } from '../Pagination/Pagination';


export const Products = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    let [filter, setFilter] = useState(data);


    const filterProducts = (cat) => {
        let newProdList = [...data];
        newProdList = newProdList.filter((prod) => {
            return prod.category === cat
        });
        setFilter(newProdList);
        setCurrentPage(1);

    }



    //stuff for pagination
    let [currentPage, setCurrentPage] = useState(1);
    let [itemsPerPage, setitemsPerPage] = useState(4);
    console.log(currentPage);
    const lastItemIndexPerPage = currentPage * itemsPerPage;// page 1 * 8 items per page = 8 last index item, 2*8 = 14 and so on.
    const firstItemIndexPerPage = lastItemIndexPerPage - itemsPerPage; // page1>> 8-8 = 0 , page2>> 14-8 = 8 and so on

    const productsPerPage = filter.slice(firstItemIndexPerPage, lastItemIndexPerPage);

    //get the data from the API
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            const products = await response.json();
            setData(products);
            setFilter(products);
            setLoading(false);
        }
        getProducts();



    }, []);


    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={320} animation="wave" />
                </div>
                <div className="col-md-3">
                    <Skeleton height={320} animation="wave" />
                </div>
                <div className="col-md-3">
                    <Skeleton height={320} animation="wave" />
                </div>
                <div className="col-md-3">
                    <Skeleton height={320} animation="wave" />
                </div>

            </>
        )
    }


    const ShowProducts = () => {
        return (
            <>

                <div className="buttons text-center my-5">

                    <button className="btn btn-outline-dark mx-1" onClick={() => { setFilter(data) }}>All</button>
                    <button className="btn btn-outline-dark mx-1" onClick={() => { filterProducts("men's clothing") }} >Men's Clothing</button>
                    <button className="btn btn-outline-dark mx-1" onClick={() => { filterProducts("women's clothing") }}>Women's Clothing</button>
                    <button className="btn btn-outline-dark mx-1" onClick={() => { filterProducts("jewelery") }}>Jewelery</button>
                    <button className="btn btn-outline-dark mx-1" onClick={() => { filterProducts("electronics") }}>Electronics</button>
                </div>
                {productsPerPage.map(product => {
                    return <div key={product.id} className='col-md-3 mb-4'>
                        <div className="card h-100">
                            <img src={product.image} className={`card-img-top p-3 ${styles["prod-image"]}`} alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
                                <p className="card-text lead fw-bold">${product.price}</p>
                                <Link to={`/products/${product.id}`} className="btn btn-outline-danger"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Buy Now</Link>
                            </div>
                        </div>
                    </div>


                })}
            </>)
    }


    return (
        <>
            <div className="container py-5 my-5">
                <div className="row justify-content-center products">
                    <div className="col-12">
                        <h1 className='mb-5 display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}

                </div>
                <div className="pagination d-flex justify-content-center mt-3">
                    <Pagination totalItems={filter.length} itemsPerPage={itemsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                </div>
            </div>

        </>
    )
}
