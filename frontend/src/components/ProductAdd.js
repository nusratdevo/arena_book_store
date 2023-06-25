import React, { useState, useEffect } from 'react'
import Sidemenu from './Sidemenu'
import AllService from "../services/AllService";
import { Link, useNavigate } from "react-router-dom";
function ProductAdd() {
    const navigate = useNavigate();
    //const { getAllCats, http, remove, create } = AllService();
    const [bookInput, setBook] = useState({
        title: '',
        price: '',
        details: '',
        category:'',
        status:'',
    });
    const [cats, setCat] = useState([]);
    const [inputImage, setImage] = useState([]);
    const [errorlist, setError] = useState([]);

    useEffect(() => {
        retrieveCats();
      }, []);
    
      const retrieveCats = () => {
        AllService.getAllCats()
          .then((res) => {
              setCat(res.data);
              console.log(res.data);
          })
          .catch(e => {
            console.log(e);
          });
    };
    
      const handleInput = (e) => {
        e.persist();
        setBook({...bookInput, [e.target.name]: e.target.value })
    }
	const saveBook = (e) => {
		e.preventDefault();
        
		const formData = new FormData();
		//formData.append('task', blogInput.title);
		//formData.append('status', currentRadioValue);        
        formData.append('title', bookInput.title);
        formData.append('price', bookInput.price);
        formData.append('details', bookInput.details);
        formData.append('category', bookInput.category);
        formData.append('status', bookInput.status);
        formData.append('image', inputImage);

        console.log("User Selected Value - ",formData)
        AllService.create(formData).then(res => {

            if(res.status === 200)
			{
                //setError('');
                //swal("Success!",res.data.msg,"success");
                setBook({
                    title: '',
                    details: '',
                    error_list: [],
                });
                navigate('/my-dashboard');
            }
            else if(res.status === 400)
            {
                setError(res.data.errors );
            }
           })
            .catch(e => {
            console.log(e);
          
        });
    
    }
    

    const options = [
    { value: "0", label: "No Available" },
    { value: "1", label: "Available" },]
    
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
                        {/* <a href="#" className="btn btn-sm btn-primary" style={{ marginLeft: '500px' }}><i className="fa fa-plus-circle"></i> List</a> */}
                        <Link to={'/my-dashboard'} className="btn btn-danger btn-sm float-end"> Booklists</Link>
                        </div>
                    </div>
                </div>
                    <form onSubmit={saveBook} encType='multipart/form-data' >
                        <div className="card border-primary rounded-0">
                           <div className="card-body p-3">
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend ">
                                            <div className="input-group-text"><i className="fa fa-user text-success py-2"></i></div>
                                        </div>
                                            <input type="text" name="title" onChange={handleInput} value={bookInput.title}  className="form-control" placeholder="Book Title" required />
                                        <span className="text-danger">{errorlist.task}</span>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend ">
                                            <div className="input-group-text"><i className="fa fa-user text-success py-2"></i></div>
                                        </div>
                                        {/* <input type="file" name="image" value={book.image}
                                                  onChange={handleInputChange} className="form-control" /> */}
                                        <input type="file" name="image" onChange={e => setImage(e.target.files[0])} className="form-control" />
                                        <span className="text-danger">{errorlist.image}</span>


                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fa fa-envelope text-success py-2"></i></div>
                                        </div>
                                           
                                        <select
                                            className="form-control"
                                            //onChange={e => setCatInput(e.target.value[0])}
                                            onChange={handleInput} value={bookInput.category}
                                            name="category"
                                        >
                                           <option>Please select one Category</option>
                                            {cats.map((cat, index) => {
                                                return <option key={index} value={cat.id}>
                                                    {cat.title}
                                                </option>
                                            })}
                                            </select>
                                    </div>
                                </div>
                                    <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend ">
                                            <div className="input-group-text"><i className="fa fa-user text-success py-2"></i></div>
                                        </div>
                                            <input type="number" className="form-control"
                                              onChange={handleInput} value={bookInput.price}
                                               name="price"
                                            placeholder="Book Price" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fa fa-comment text-success py-4"></i></div>
                                        </div>
                                            <textarea className="form-control"
                                                  onChange={handleInput} value={bookInput.details}
                                                   name="details"
                                              placeholder="Book Detail" required></textarea>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fa fa-envelope text-success py-2"></i></div>
                                        </div>
                                           
                                        <select
                                            // value={book.status}
                                            className="form-control"
                                            onChange={handleInput} value={bookInput.status}
                                            name="status"
                                        >
                                           <option readOnly>Please choose one Status</option>
                                            {options.map((option, index) => {
                                                return <option key={index} value={option.value}>
                                                    {option. label}
                                                </option>
                                            })}
                                            </select>
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
