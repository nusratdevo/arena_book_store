import React from 'react'

function Sidemenu() {
  return (
	<div className="col-lg-4 pb-5">
            
            <div className="author-card pb-3">
                <div className="author-card-cover"><a className="btn btn-style-1 btn-white btn-sm" href="#" data-toggle="tooltip" title="" data-original-title="You currently have 290 Reward points to spend"><i className="fa fa-award text-md"></i>&nbsp;290 points</a></div>
                <div className="author-card-profile">
                    <div className="author-card-avatar"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Daniel Adams"/>
                    </div>
                    <div className="author-card-details">
                        <h5 className="author-card-name text-lg">Daniel Adams</h5><span className="author-card-position">Joined June 06, 2023</span>
                    </div>
                </div>
            </div>
            <div className="wizard">
                <nav className="list-group list-group-flush">
                    <a className="list-group-item active" href="#">
                        <div className="d-flex justify-content-between align-items-center">
                            <div><i className="fa fa-shopping-bag mr-1 text-muted"></i>
                                <div className="d-inline-block font-weight-medium text-uppercase">Orders List</div>
                            </div><span className="badge badge-danger">6</span>
                        </div>
                    </a><a className="list-group-item" href="https://www.bootdey.com/snippets/view/bs4-profile-settings-page" target="__blank"><i className="fa fa-user text-muted"></i>Profile Settings</a><a className="list-group-item" href="#"><i className="fa fa-map-marker text-muted"></i>Addresses</a>
                    <a className="list-group-item" href="https://www.bootdey.com/snippets/view/bs4-wishlist-profile-page" tagert="__blank">
                        <div className="d-flex justify-content-between align-items-center">
                            <div><i className="fa fa-heart mr-1 text-muted"></i>
                                <div className="d-inline-block font-weight-medium text-uppercase">My Wishlist</div>
                            </div><span className="badge badge-secondary">3</span>
                        </div>
                    </a>
                    <a className="list-group-item" href="#">
                        <div className="d-flex justify-content-between align-items-center">
                            <div><i className="fa fa-tag mr-1 text-muted"></i>
                                <div className="d-inline-block font-weight-medium text-uppercase">My Tickets</div>
                            </div><span className="badge badge-secondary">4</span>
                        </div>
                    </a>
                </nav>
            </div>
        </div>
  )
}

export default Sidemenu
