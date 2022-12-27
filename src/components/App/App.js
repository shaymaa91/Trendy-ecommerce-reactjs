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


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/create" element={<AddNewProduct />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/test" element={<TestPagination />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound/>}></Route>
        
      </Routes>

    </>
  );
}

export default App;
