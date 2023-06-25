import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import BookCart from "./components/BookCart";
import Header from "./components/Header";
import ProductAdd from "./components/ProductAdd";
import ConfirmOrder from "./components/ConfirmOrder";
import MyDashboard from "./components/MyDashboard";
import Order from "./components/Order";
import NotFound from "./components/NotFound";
import { cartContext } from './Context';
import { useState } from 'react';
const checkCart = localStorage.getItem('cartData')

function App() {
  const [cartData, setCartData] = useState(JSON.parse(checkCart));
  return (
    <cartContext.Provider value={{cartData,setCartData}}>
     <Header />
      <div className="container mt-3">
          <Routes>
              <Route path="/" element={<BookList/>} />
              <Route path="/editbook/:id" element={<BookDetail/>} />
              <Route path="/cart" element={<BookCart />} />
              <Route path="/my-dashboard" element={<MyDashboard />} />
              <Route path="/add-product" element={<ProductAdd />} />
              <Route path="/my-order" element={<Order />} />
              <Route path="/order-confirm" element={<ConfirmOrder/>} />
                <Route element={<NotFound />} />
                 <Route path="/*"  element={<NotFound />} />
          </Routes>
        </div>
      
    </cartContext.Provider>
  );
}

export default App;
