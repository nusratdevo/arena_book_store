import React from 'react'
import Sidemenu from './Sidemenu'

function ProductAdd() {
	return (
	
	<div className=" mb-4 p-2" style={{ border: '5px solid #e3f2fd ' }}>
    <div className="row">
        
        <Sidemenu/>
        <div className="col-lg-9">
            <div className="panel">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 d-flex ">
									
									<h5 >Product Form</h5>
									<a href="#" className="btn btn-sm btn-primary" style={{ marginLeft: '500px' }}><i className="fa fa-plus-circle"></i> List</a>
                        </div>
                    </div>
                </div>
                    <form action="mail.php" method="post">
                        <div className="card border-primary rounded-0">
                           
                            <div className="card-body p-3">

                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend ">
                                            <div className="input-group-text"><i className="fa fa-user text-success py-2"></i></div>
                                        </div>
                                        <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Nombre y Apellido" required/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fa fa-envelope text-success py-2"></i></div>
                                        </div>
                                        <input type="email" className="form-control" id="nombre" name="email" placeholder="ejemplo@gmail.com" required/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fa fa-comment text-success py-4"></i></div>
                                        </div>
                                        <textarea className="form-control" placeholder="Envianos tu Mensaje" required></textarea>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <input type="submit" value="Save" className="btn btn-primary btn-block rounded-0 py-2"/>
                                </div>
                            </div>

                        </div>
                    </form>
	            </div>
				</div>
			</div>
	</div>

);
}

export default ProductAdd
