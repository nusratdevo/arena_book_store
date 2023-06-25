import React, { useState, useEffect } from 'react'
import Sidemenu from './Sidemenu'
import AllService from "../services/AllService";
import { Link } from "react-router-dom";

function Order() {
    const [books, setBook] = useState([]);


    useEffect(() => {
        retrieveBooks();
      }, []);
    
      const retrieveBooks = () => {
        AllService.getAllOrders()
          .then((res) => {
              setBook(res.data);
              console.log(res.data);
          })
          .catch(e => {
            console.log(e);
          });
    };
    
	return (
	  
    <div className=" mb-4 p-2" style={{ border: '5px solid #e3f2fd ' }}>
    <div className="row">
        
        <Sidemenu/>
        <div className="col-lg-9">
            <div className="panel">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 d-flex ">
                            <a href="#" className="btn btn-sm btn-primary"><i className="fa fa-plus-circle"></i> My Orders</a>
                                    <form className="form-horizontal" style={{ marginLeft: '400px' }}>
                                    <div className="form-inline ">
                                    <label for="order-sort">Sort Orders</label>
                                    <select className="form-control" id="order-sort">
                                        <option>All</option>
                                        <option>Delivered</option>
                                        <option>In Progress</option>
                                        <option>Delayed</option>
                                        <option>Canceled</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="panel-body table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th >#</th>
                                <th>Product Title</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                           {books && books.map((book, index) => {
                             return (
                            <tr>
                                <td>{book.id}</td>
                                     <td>{book.product.title} </td>
                                <td className="product-avatar">
                                         {book.product.image ?
                                             <img src={ `${book.product.image}`} /> :
                                             <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Daniel Adams" />
                                         }
                                     </td>
                               
                                     <td>
                                     {book.price}
                                     </td>
                                     <td>{book.qty}</td>
                                     <td>Status</td>
                                
                            </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="num-footer">
                    <div className="row">
                        <div className="col-sm-6 col-xs-6">showing <b>5</b> out of <b>25</b> entries</div>
                        <div className="col-sm-6 col-xs-6">
                            <ul className="pagination hidden-xs" style={{ marginLeft: '80px' }}> 
                                <li><a href="#">«</a></li>
                                <li className="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">»</a></li>
                            </ul>
                            {/* <ul className="pagination visible-xs pull-right">
                                <li><a href="#">«</a></li>
                                <li><a href="#">»</a></li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        
	</div>
        </div>
</div>
            


  
  )
}

export default Order
