import React from 'react'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import {  cartContext } from '../Context';
function Header(props) {
	const { cartData, setCartData } = useContext(cartContext);

	if (cartData == null || cartData.length == 0) {
		var cartItem = 0
	  } else {
		var cartItem = cartData.length
	}
	
	
  return (
	<nav className="navbar navbar-expand-lg navbar-light bg-light" >
			<div className="container">
			<a className="navbar-brand" href="#">BookStore</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<form className="d-flex">
				<input className="form-control ms-2" type="search" placeholder="Search" aria-label="Search"/>
				<button className="btn btn-outline-success" type="submit">Search</button>
				</form>
				<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
				<li className="nav-item">
					<Link to={"/"} className="nav-link active" aria-current="page">
					   Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to={"/cart"} className="nav-link">
							  Card
							({cartItem})
							 
							  
					</Link>
				</li>
				<li className="nav-item">
					<Link to={"/my-dashboard"} className="nav-link">
					   MyDashboar
					</Link>
				</li>
				</ul>
				
			</div>
			</div>
    </nav>
  )
}

export default Header
