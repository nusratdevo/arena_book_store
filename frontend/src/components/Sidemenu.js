import React from 'react'
import { Link } from "react-router-dom";

function Sidemenu() {
  return (
	<div className="col-lg-3 pb-5">
            
            <div className="author-card pb-3">
                <div className="author-card-cover"><a className="btn btn-style-1 btn-white btn-sm" href="#" data-toggle="tooltip" title="" data-original-title="You currently have 290 Reward points to spend"></a></div>
                <div className="author-card-profile">
                    <div className="author-card-avatar"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Daniel Adams"/>
                    </div>
                    <div className="author-card-details">
                        <h5 className="author-card-name text-lg">Daniel Adams</h5><span className="author-card-position">Current Date</span>
                    </div>
                </div>
            </div>
            <div className="wizard">
                <nav className="list-group list-group-flush">
                    <Link to={"/my-dashboard"} className="list-group-item active">
                        <div className="d-flex justify-content-between align-items-center">
                            <div><i className="fa fa-shopping-bag mr-1 text-muted"></i>
                                <div className="d-inline-block font-weight-medium text-uppercase">Product List</div>
                            </div>
                        </div>
                  </Link>
                  <a className="list-group-item" href=''><i className="fa fa-user text-muted"></i>Profile Settings</a>
                  <Link to={"/add-product"} className="list-group-item" href="#"><i className="fa fa-map-marker text-muted"></i>Add Product</Link>
                    <Link to={"/my-order"}className="list-group-item" href="">
                        <div className="d-flex justify-content-between align-items-center">
                            <div><i className="fa fa-heart mr-1 text-muted"></i>
                                <div className="d-inline-block font-weight-medium text-uppercase">My Orders</div>
                            </div><span className="badge badge-secondary">3</span>
                        </div>
                    </Link>
                    <a className="list-group-item" href="#">
                        <div className="d-flex justify-content-between align-items-center">
                            <div><i className="fa fa-tag mr-1 text-muted"></i>
                                <div className="d-inline-block font-weight-medium text-uppercase text-bg-danger p-1">LogOut</div>
                            </div><span className="badge badge-secondary">4</span>
                        </div>
                    </a>
                </nav>
            </div>
        </div>
  )
}

export default Sidemenu
