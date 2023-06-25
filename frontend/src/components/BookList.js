import React, { useState, useEffect } from 'react'
import Sidemenu from './Sidemenu'
import AllService from "../services/AllService";
import { Link } from "react-router-dom";

function BookList() {
	const [books, setBook] = useState([]);


	useEffect(() => {
        retrieveBooks();
	}, []);
	
	const retrieveBooks = () => {
        AllService.getAll()
          .then((res) => {
              setBook(res.data);
              console.log(res.data);
          })
          .catch(e => {
            console.log(e);
          });
    };
  return (
	<div className="container mt-5">
      <div className="container d-flex justify-content-center mt-50 mb-50">
			  <div className="row">
			  {books && books.map((book, index) => { 
                  return (
				  <div className="col-md-4 mt-2">
					  <div className="card">
					 
							<div className="card-body">
								<div className="card-img-actions">
										
							{book.image ?
									<img src={ `${book.image}`}className="card-img img-fluid" style={{ height: '150px' , width:'200px'}} /> :
									<img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png" className="card-img img-fluid" style={{ height: '150px' }} />
								}
								</div>
							</div>

							<div className="card-body bg-light text-center">
								<div className="mb-2">
									<h6 className="font-weight-semibold mb-2">
										<a href="#" className="text-default mb-2" data-abc="true">{book.title}</a>
									  </h6>
									  <h6 className="font-weight-semibold mb-2">
										<b>Category :</b> {book.category.title}
									</h6>
									  <a href="#" className="text-muted" data-abc="true">
										  {book.details.length > 50 ?
                                            `${book.details.substring(0, 50)}...` : book.details
                                        }</a>
								</div>
								<h3 className="mb-0 font-weight-semibold">${book.price}</h3>
								<div>
									<i className="fa fa-star star"></i>
									<i className="fa fa-star star"></i>
									<i className="fa fa-star star"></i>
									<i className="fa fa-star star"></i>
								</div>
								{/* <div className="text-muted mb-3">34 reviews</div> */}
								<Link to={`/editbook/${book.id}`} className="btn btn-success btn-sm mx-2 bg-cart"><i className="fa fa-cart-plus mr-2"></i> details</Link>
								<button type="button" className="btn btn-danger btn-sm bg-cart"><i className="fa fa-heart mr-2"></i> Add to wishlist</button>
							</div>
						  
				      </div>
                </div> 
		    );
		})}
		</div>		 
		 
      </div>
      
	</div>
      
  )
}

export default BookList
