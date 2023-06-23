import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import BookCart from "./components/BookCart";
import Header from "./components/Header";
import Order from "./components/Order";

import MyDashboard from "./components/MyDashboard";

function App() {
  return (
    <>
     <Header />
      <div className="container mt-3">
          <Routes>
              <Route path="/" element={<BookList/>} />
              <Route path="/book/:id" element={<BookDetail/>} />
              <Route path="/cart" element={<BookCart />} />
              <Route path="/my-dashboard" element={<MyDashboard/>} />
          </Routes>
        </div>
      
    </>
  );
}

export default App;
