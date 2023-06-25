import React from 'react'
import { useContext, useState } from 'react';
import {  cartContext } from '../Context';
import { Link ,useNavigate} from 'react-router-dom';
import AllService from "../services/AllService";
function BookCart() {
  const navigate = useNavigate();
  const { cartData, setCartData } = useContext(cartContext);
  
  const [cartButtonClick, setCartButtonClick] = useState(false);
  const [bookInput, setBookInput] = useState([]);
  console.log('storedata', cartData)


  if (cartData == null || cartData.length == 0) {
    var cartItem = 0
  } else {
    var cartItem = cartData.length
  }
  var sum = 0;
	cartData.map((item, index) => {
		sum = parseFloat(item.product.price);
  });
  var ship = 20;
  var Grand = sum+ship
  const cartRemoveButtonHandlar = (remove_id) => {
    var previousCart = localStorage.getItem('cartData');
    var cartJson = JSON.parse(previousCart);
    cartJson.map((cart, index) => {
        if (cart != null && cart.product.id == remove_id) {
            // delete cartJson[index];
            cartJson.splice(index, 1);
        }
    });
    var cartSrting = JSON.stringify(cartJson);
    localStorage.setItem('cartData', cartSrting);
    setCartButtonClick(false);
    setCartData(cartJson);
 }

  const addOrderIndatable = () => {
  var previousCart = localStorage.getItem('cartData');
      var cartJson = JSON.parse(previousCart);
      if (cartJson != null) {
          cartJson.map((cart, index) => {
              //submit Data
      const formData = new FormData();
      formData.append('product', cart.product.id); 
      formData.append('price', cart.product.price);
      formData.append('qty', 1);
        
      AllService.orderCreate( formData)
        .then((res) => {
          console.log(res.data);
          navigate('/order-confirm');
          // localStorage.removeItem('cartData');
        })
        .catch(e => {
          console.log(e);
        });
      });
  }
}

  return (
	<section className="h-100 h-custom" >
          
	<div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
            <div className="card">
              
                <div className="card-body p-4">
       
                  {cartData &&
                    <div className="row">

                      <div className="col-lg-7">
                        <div><h5 className="mb-3 d-flex"><i className="fa-solid fa-cart-plus me-2"></i>
                        Cart Count
                        ({cartItem})
                        </h5></div>
                    
                        <hr />

                        <div className="d-flex justify-content-between align-items-center mb-4">
                  
                          {/* <div>
                    <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!"
                        className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
                  </div> */}
                        </div>
                        {cartData && cartData.map((cart, index) => {
                          return (
                   
                            <div className="card mb-3">
                              <div className="card-body">
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex flex-row align-items-center">
                                    <div>
                                      {cart.product.image ?
                                        <img src={cart.product.image}
                                          className="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} /> :
                                        <img src="http://nicesnippets.com/demo/pd-image1.jpg" style={{ width: '65px' }} class="border p-3" />
                                      }
                        
                                    </div>
                                    <div className="ms-3">
                                      <h5>{cart.product.title}</h5>
                                      {/* <p className="small mb-0">256GB, Navy Blue</p> */}
                                    </div>
                                  </div>
                                  <div className="d-flex flex-row align-items-center">
                                    {/* <div style={{width: '50px'}}>
                          <h5 className="fw-normal mb-0">2</h5>
                        </div> */}
                                    <div style={{ width: '80px' }}>
                                      <h5 className="mb-0">${cart.product.price}</h5>
                                    </div>
                                    {/* <a href="#!" style={{ color: '#cecece' }}>
                                      <i className="fas fa-trash-alt"></i></a> */}
                                      
                                <button type="button"
                                title='remove from cart button'
                                    className="btn btn-danger"
                                    aria-hidden="true"
                                    onClick={()=>cartRemoveButtonHandlar(cart.product.id)}
                                ><i className="fas fa-trash-alt"></i></button>
                                    
                                    

                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
    

                      </div>
                      <div className="col-lg-5">

                        <div className="card bg-primary text-white rounded-3">
                          <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                              <h5 className="mb-0">Card Summary</h5>
                            </div>

                            <hr className="my-4" />

                            <div className="d-flex justify-content-between">
                              <p className="mb-2">Subtotal</p>
                              <p className="mb-2">${sum}.00</p>
                            </div>

                            <div className="d-flex justify-content-between">
                              <p className="mb-2">Shipping</p>
                              <p className="mb-2">$20.00</p>
                            </div>

                            <div className="d-flex justify-content-between mb-4">
                              <p className="mb-2">Total(Incl. taxes)</p>
                              <p className="mb-2">${Grand}.00</p>
                            </div>
                            <div className="d-flex justify-content-between mb-4">
                              <Link to={'/'} className="btn btn-danger btn-block btn-sm">
                                Shop More
                            </Link>
                              {/* <Link to={'/order-confirm'} className="btn btn-info btn-block btn-sm">
                                Order Done <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </Link> */}
                            <button type="button"
                                        className=" btn btn-info btn-block btn-sm"
                                        aria-hidden="true"
                                        onClick={() => addOrderIndatable()}>
                                    Order Done <i className="fas fa-long-arrow-alt-right ms-2"></i></button>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                }
                {!cartData &&
                  <h2>Cart is Empty</h2>
                }
          
                </div>
        </div>
      </div>
    </div>
		  </div>
   </section>
  )
}

export default BookCart
