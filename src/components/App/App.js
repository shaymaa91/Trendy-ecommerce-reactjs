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
import { useState, createContext } from 'react';
import jwtDecode from 'jwt-decode';
import CartContext from '../Context/CartContext'
import { StyledCompTest } from './../StyledCompTest/StyledCompTest';
import { Register } from './../Register/Register';



function App() {

  let [userInfo, setUserInfo] = useState(null);
  console.log(userInfo)
  const setUserData = () => {
    let token = localStorage.getItem('token');
    let decodToken = jwtDecode(token);
    setUserInfo(decodToken.user)
  }


  let [cartList, setCartList] = useState([]);

  const addProductToCart = (prodData) => {
    console.log("prodData",prodData)
  }

  return (

    <>
      <CartContext.Provider value={cartList}>
        <Navbar userInfo={userInfo} setUserInfo={setUserInfo} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:id" element={<Product addProductToCart={addProductToCart} />} />
          <Route path="/create" element={<AddNewProduct />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/test" element={<TestPagination />} />
          <Route path="/login" element={<Login setUserInfo={setUserInfo} />} />
          <Route path="/register" element={<Register />} />

          <Route path="/table" element={<TableB />} />
          <Route path="/s" element={<StyledCompTest/>} />
          <Route path="*" element={<NotFound />}></Route>


        </Routes>
      </CartContext.Provider>


    </>




  );
}

export default App;
