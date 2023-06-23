import React from 'react'
import Sidemenu from './Sidemenu'

function MyDashboard() {
	return (
	
	<div className=" mb-4 p-2" style={{ border: '5px solid #e3f2fd ' }}>
    <div className="row">
        
        <Sidemenu/>
        <div className="col-lg-9">
            <div className="panel">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 d-flex ">
                            <a href="#" className="btn btn-sm btn-primary"><i className="fa fa-plus-circle"></i> Add New</a>
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
                                <th>Details</th>
                                <th>Image</th>
                                <th>Status</th>
                                <th>View</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                               
                                <td>1</td>
                                <td>Product Title</td>
                                        <td>Details 
                                        {/* <p>
                                        {item.description.length > 250 ?
                                            `${item.description.substring(0, 250)}...` : item.description
                                        }
                                        </p> */}
                                </td>
                                <td className="product-avatar"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Daniel Adams"/></td>
                                <td className=''>Status</td>
                                <td><a href="#" className="btn btn-sm btn-success"><i className="fa fa-search"></i></a></td>
                                <td>
                                    <ul className="action-list">
                                    <li><a href="#" className="btn btn-primary"><i className="fa fa-pencil-alt"></i></a></li>
                                        <li><a href="#" className="btn btn-danger"><i className="fa fa-times"></i></a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                
                                <td>2</td>
                                <td>Product Title</td>
                                <td>Details</td>
                                <td className="product-avatar"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Daniel Adams"/></td>
                                <td className=''>Status</td>
                                <td><a href="#" className="btn btn-sm btn-success"><i className="fa fa-search"></i></a></td>
                                <td>
                                    <ul className="action-list">
                                        <li><a href="#" className="btn btn-primary"><i className="fa fa-pencil-alt"></i></a></li>
                                        <li><a href="#" className="btn btn-danger"><i className="fa fa-times"></i></a></li>
                                    </ul>
                                </td>
                            </tr>
                           
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

export default MyDashboard
