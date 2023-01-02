import { Home } from '../Home/Home';
import { Navbar } from '../Navbar/Navbar';
import { Products } from '../Products/Products';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { About } from './../About/About';
import { Contact } from './../Contact/Contact';
import { Product } from './../Product/Product';
import { AddNewProduct } from './../AddNewProduct/AddNewProduct';
import { Cart } from './../Cart/Cart';
import { TestPagination } from './../TestPagination/TestPagination';
import { Login } from './../Login/Login';
import { NotFound } from '../NotFound/NotFound';
import { TableB } from '../Table/Table';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';




function App() {
  
  let [userInfo,setUserInfo]= useState(null);
  console.log(userInfo)
  const setUserData = ()=>{
    let token = localStorage.getItem('token');
    let decodToken = jwtDecode(token);
    setUserInfo(decodToken.user)
  }



  return (

    <>
      <Navbar userInfo={userInfo} setUserInfo={setUserInfo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/create" element={<AddNewProduct />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/test" element={<TestPagination />} />
        <Route path="/login" element={<Login setUserData={setUserData} />} />
        
        <Route path="/table" element={<TableB />} />
        <Route path="*" element={<NotFound />}></Route>


      </Routes>

    </>




  );
}

export default App;
