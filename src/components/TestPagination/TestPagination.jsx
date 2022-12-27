import React, { useState, useEffect } from 'react'
import { Pagination } from '@mui/material'

export const TestPagination = () => {

    let [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        console.log(products);
        setProducts(products);
    }
    useEffect(() => {
        getProducts();
    }, [])

    let [currentPage, setCurrentPage] = useState(1);
    let itemsPerPage = 2;
    let totalPages = products.length / itemsPerPage
    const handlePage = (e, p) => {
        console.log(e, p);
        setCurrentPage(p);

    }
    const lastItemIndexPerPage = currentPage * itemsPerPage;// page 1 * 8 items per page = 8 last index item, 2*8 = 14 and so on.
    const firstItemIndexPerPage = lastItemIndexPerPage - itemsPerPage; // page1>> 8-8 = 0 , page2>> 14-8 = 8 and so on

    let productsPerPage = products.slice(firstItemIndexPerPage, lastItemIndexPerPage)
    return (
        <>
            <div className="row">
                {productsPerPage.map((product) => {
                    return (
                        <div key={product.id} className='col-md-3 mb-4'>
                            <div className="card h-100 " height="200px">
                                <img src={product.image} height="200px" className={`card-img-top p-3 }`} alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
                                    <p className="card-text lead fw-bold">${product.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Pagination count={totalPages} color="primary" onChange={handlePage} />
        </>
    )
}
