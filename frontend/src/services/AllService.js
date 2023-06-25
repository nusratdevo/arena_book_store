import axios from 'axios';
const http = axios.create({
  
	baseURL:"http://127.0.0.1:8000/api/product",
	headers: {
		'Accept':'application/json',
		//'Content-Type': 'application/json',
		//"Content-Type": "multipart/form-data",
		   
		
	}
  
});
  

const getAll = () => {
	return http.get("/");
};
const getAllOrders = () => {
	return http.get("/orderItem/");
};
const getById = (id) => {
	return http.get(`/${id}/`);
};

const getAllCats = () => {
	return http.get("/cat");
};
const create = data => {
	return http.post("/", data);
};

const orderCreate = data => {
	return http.post("/orderItem/", data);
};
const update = (id, data) => {
	return http.patch(`/${id}/`, data);
};

const remove = id => {
	return http.delete(`/${id}/`);
};

const removeAll = () => {
	return http.delete(`/`);
  };
  
  const findByTitle = title => {
	return http.get(`/?title=${title}`);
  };
  
  const AllService = {
	  getAll,
	  getById,
	getAllCats,
	  create,
	  orderCreate,
	update,
	remove,
	removeAll,
	  findByTitle,
	  http,
	  getAllOrders
  };
  
  export default AllService;