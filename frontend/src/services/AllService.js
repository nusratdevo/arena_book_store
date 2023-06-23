import axios from 'axios';
const http = axios.create({
  
	baseURL:"http://127.0.0.1:8000/api/product",
	headers: {
		'Accept':'application/json',
		'Content-Type': 'application/json',
		// "Authorization" : `Bearer ${usertoken}`
		   
		
	}
  
});
  

const getAll = () => {
	return http.get("/");
};

const create = data => {
	return http.post("/", data);
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
	get,
	create,
	update,
	remove,
	removeAll,
	findByTitle
  };
  
  export default AllService;