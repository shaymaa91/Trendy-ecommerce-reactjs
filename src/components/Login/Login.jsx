import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { json } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const Login = ({setUserData}) => {

    const goHome = useNavigate();

    let [user, setUser] = useState({
        email: "",
        password: ""
    });

    let [frontErrors, setFrontErrors] = useState([]);
    let [backErrors, setBackErrors] = useState("");
    let [token, setToken] = useState();

    const handleChange = (e) => {
        let myuser = { ...user, [e.target.name]: e.target.value };
        setUser(myuser);
    }

    //function to validate login user from backend side
    const backValidate = async () => {
        let response = await axios.post('https://fakestoreapi.com/auth/login', { username: "mor_2314", password: "83r5^_" });
        return (response);
    }

    const handleForm = async (e) => {
        e.preventDefault();
        setFrontErrors([]);
        //frontend side validation
        const validateRes = validateFormDate();

        if (validateRes.error) {
            //set front end errors
            setFrontErrors(validateRes.error.details);

        } else {
            //make request to validate user from backend side then set user info and token

            const backres = await backValidate();
            
            if (backres.status == 200) {
                let { data } = backres;
                setToken(data.token);
                localStorage.setItem('token', data.token);
                setUserData();
                goHome('/home');
            }

        }
    }

    //validate form data using Joi library on submit
    const Joi = require('joi');
    const validateFormDate = () => {
        const schema = Joi.object({
            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        });

        const result = schema.validate({ ...user }, { abortEarly: false });

        return result;
    }


    return (
        <>
            <div className='container'>
                <div className="row justify-content-center mt-5 pt-5">
                    <div className="col-md-6">
                        <h1 className='text-center mb-5 shadow-sm'>Login</h1>
                        {
                            frontErrors.map((e, index) => {

                                return (<div key={index} className='alert alert-danger '>{e.message}</div>)
                            })
                        }
                        <form onSubmit={handleForm}>
                            <div className="mb-3 row">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input value={user.email} onChange={handleChange} name="email" type="email" className="form-control-plaintext" id="staticEmail" placeholder='name@example.com' />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input value={user.password} onChange={handleChange} name="password" type="password" className="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-dark" type="submit">Sign In</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </>

    )
}
