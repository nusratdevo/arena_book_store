import React, { useState, useEffect } from 'react'
import AllService from "../services/AllService";
import { Link, useParams ,useNavigate} from "react-router-dom";
function BookDetail() {
    const navigate = useNavigate();
    let { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [bookInput, setBook] = useState({
        title: '',
        price: '',
        details: '',
        category:'',
        status:'',
    } );
    const [inputImage, setImage] = useState([]);
    const [errorInput, setError] = useState([]);

    useEffect(() => {
        
        //const id = props.match.params.id;
        AllService.getById(id).then( res => {

            if(res.status === 200)
            {
                setBook(res.data);
                setLoading(false);
            }
            else if(res.status === 404)
            {
               // swal("Error",res.data.errors,"error");
				navigate('/my-dashbord');

            }
        });

    }, []);
  return (
	<div class="container">
    <div class="col-lg-10 border p-3 main-section bg-white">
        <div class="row hedding m-0 pl-3 pt-0 pb-3">
            Product Detail
        </div>
        <div class="row m-0">
                  <div class="col-lg-4 left-side-product-box pb-3">
                  {bookInput.image ?
                        <img src={ `${bookInput.image}`} class="border p-3"/> :
                        <img src="http://nicesnippets.com/demo/pd-image1.jpg" width={30} height={300} class="border p-3"/>
                    }
                {/* <span class="sub-img">
                    <img src="http://nicesnippets.com/demo/pd-image2.jpg" class="border p-2">
                    <img src="http://nicesnippets.com/demo/pd-image3.jpg" class="border p-2">
                    <img src="http://nicesnippets.com/demo/pd-image4.jpg" class="border p-2">
                </span> */}
            </div>
            <div class="col-lg-8">
                <div class="right-side-pro-detail border p-3 m-0">
                    <div class="row">
                        <div class="col-lg-12">
                           
                            <p class="m-0 p-0">{bookInput.title}</p>
                        </div>
                        
                        <div class="col-lg-12 pt-2">
                            <h5>Product Detail</h5>
                            <span>{bookInput.details}</span>
                            <hr class="m-0 pt-2 mt-2"/>
                        </div>
                        <div class="col-lg-12">
                            <p class="tag-section"><strong>Category: </strong>{bookInput.category}</p>
                  </div>
                  <div class="col-lg-12">
                            <p class="m-0 p-0 price-pro"> <strong>Price: </strong>{bookInput.price}</p>
                            <hr class="p-0 m-0"/>
                        </div>
                        {/* <div class="col-lg-12">
                            <h6>Quantity :</h6>
                            <input type="number" class="form-control text-center w-100" value="1"/>
                        </div> */}
                        <div class="col-lg-12 mt-3">
                            <div class="row">
                                      <div class="col-lg-6 pb-2">
                                      {bookInput.status ? <Link to={'/cart'} class="btn btn-danger w-100">Add To Cart</Link> : "Out of stock"}
                                    
                                </div>
                                <div class="col-lg-6">
                                <Link to={'/my-dashboard'} class="btn btn-success w-100">Continue Shop</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default BookDetail
