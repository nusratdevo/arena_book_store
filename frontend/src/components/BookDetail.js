import React from 'react'

function BookDetail() {
  return (
	<div class="container">
    <div class="col-lg-10 border p-3 main-section bg-white">
        <div class="row hedding m-0 pl-3 pt-0 pb-3">
            Product Detail Design Using Bootstrap 4.0
        </div>
        <div class="row m-0">
            <div class="col-lg-4 left-side-product-box pb-3">
              <img src="http://nicesnippets.com/demo/pd-image1.jpg" width={30} height={300} class="border p-3"/>
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
                           
                            <p class="m-0 p-0">Women's Velvet Dress</p>
                        </div>
                        
                        <div class="col-lg-12 pt-2">
                            <h5>Product Detail</h5>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris.</span>
                            <hr class="m-0 pt-2 mt-2"/>
                        </div>
                        <div class="col-lg-12">
                            <p class="tag-section"><strong>Category: </strong><a href="">Woman</a><a href="">,Man</a></p>
                  </div>
                  <div class="col-lg-12">
                            <p class="m-0 p-0 price-pro"> <strong>Price: </strong>$30</p>
                            <hr class="p-0 m-0"/>
                        </div>
                        {/* <div class="col-lg-12">
                            <h6>Quantity :</h6>
                            <input type="number" class="form-control text-center w-100" value="1"/>
                        </div> */}
                        <div class="col-lg-12 mt-3">
                            <div class="row">
                                <div class="col-lg-6 pb-2">
                                    <a href="#" class="btn btn-danger w-100">Add To Cart</a>
                                </div>
                                <div class="col-lg-6">
                                    <a href="#" class="btn btn-success w-100">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 text-center pt-3">
                <h4>More Product</h4>
            </div>
        </div>
        <div class="row mt-3 p-0 text-center pro-box-section">
            <div class="col-lg-3 pb-2">
                <div class="pro-box border p-0 m-0">
                    <img src="http://nicesnippets.com/demo/pd-b-image1.jpg"/>
                </div>
            </div>
            <div class="col-lg-3 pb-2">
                <div class="pro-box border p-0 m-0">
                    <img src="http://nicesnippets.com/demo/pd-b-images2.jpg"/>
                </div>
            </div>
            <div class="col-lg-3 pb-2">
                <div class="pro-box border p-0 m-0">
                    <img src="http://nicesnippets.com/demo/pd-b-images3.jpg"/>
                </div>
            </div>
            <div class="col-lg-3 pb-2">
                <div class="pro-box border p-0 m-0">
                    <img src="http://nicesnippets.com/demo/pd-b-images4.jpg"/>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default BookDetail