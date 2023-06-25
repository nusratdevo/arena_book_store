import React, { useState, useEffect } from 'react'
import Sidemenu from './Sidemenu'
import AllService from "../services/AllService";
import { Link } from "react-router-dom";
function MyDashboard() {

    const [bookId, setBookId] = useState(null);
    const [books, setBook] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    let id =1
    useEffect(() => {
        retrieveBooks();
        retrieveBook(id)
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
    
    const retrieveBook = (id) => {
        AllService.getById(id)
          .then((res) => {
            setBookId(res.data);
              console.log(res.data);
          })
          .catch(e => {
            console.log(e);
          });
    };

    const refreshList = () => {
        retrieveBooks();
    };
    
    const onDelete = (id) => {
        AllService.remove(id)
          .then((res) => refreshList());
      };
    const removeAllBooks = () => {
        AllService.removeAll()
          .then(response => {
            console.log(response.data);
            refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      };
    
    const onChangeSearchTitle = e => {
        //value={searchTitle}
        //onChange={onChangeSearchTitle}
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };

    // const findByTitle = () => {
    //    AllService.findByTitle(searchTitle)
    //   .then(response => {
    //     setBook(response.data);
    //     console.log(response.data);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
    // };
    

	return (
	
	<div className=" mb-4 p-2" style={{ border: '5px solid #e3f2fd ' }}>
    <div className="row">
        
        <Sidemenu/>
        <div className="col-lg-9">
            <div className="panel">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 d-flex ">
                        <Link to={'/add-product'} className="btn btn-sm btn-primary"><i className="fa fa-plus-circle"></i> Add New</Link>
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
                           {books && books.map((book, index) => {
                             return (
                            <tr>
                                <td>{book.id}</td>
                                <td>{book.title} {book.category}</td>
                                        <td>Details 
                                        <p>
                                        {book.details.length > 50 ?
                                            `${book.details.substring(0, 50)}...` : book.details
                                        }
                                        </p>
                                </td>
                                     <td className="product-avatar">
                                         {book.image ?
                                             <img src={ `http://127.0.0.1:8000/${book.image}`} /> :
                                             <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Daniel Adams" />
                                         }
                                     </td>
                                     {/* <td>{book.category.title}</td> */}
                                <td className="text-success"><b>{book.status ? "Available" : "Out of stock"}</b></td>
                                <td><Link to={`/editbook/${book.id}`} className="btn btn-sm btn-success"><i className="fa fa-search"></i></Link></td>
                                <td>
                                    <ul className="action-list">
                                    <li>
                                    <Link to={`/editbook/${book.id}`} className="btn btn-primary"><i className="fa fa-pencil-alt"></i></Link>
                                    
                                    </li>
                                    <li>
                                        <button type="button"
                                        className="btn btn-danger"
                                        aria-hidden="true"
                                        onClick={() => onDelete(book.id)}
                                    ><i className="fa fa-trash"></i></button>
                                    </li>
                                    </ul>
                                </td>
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

export default MyDashboard
