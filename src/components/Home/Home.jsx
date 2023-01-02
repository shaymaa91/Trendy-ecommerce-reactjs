import React,{useContext} from 'react';
import homeBack from '../.././bg.jpg';
import styles from './Home.module.css';



export const Home = () => {
   
    return (
        <>
            <div className='home'>
                <div className="card text-bg-dark border-0 rounded-0 ">
                    <img src={homeBack} className={`card-img rounded-0 ${styles["card-img-h"]}`}  alt="home background image" />

                    <div className="card-img-overlay text-end d-flex flex-column justify-content-center ">
                        <div className="container ">
                            <h5 className="card-title display-4 fw-bolder">New Season Arrivals</h5>
                            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                            
                        </div>
                    </div>


                </div>
            </div>


        </>
    )
}
