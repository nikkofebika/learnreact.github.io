import axios from 'axios';

const rootPath = 'http://localhost:4444';
const rootOnline = 'https://jsonplaceholder.typicode.com';

const Get = (path, bool) =>{
	const promise = new Promise((resolve, reject) =>{	
		axios.get(`${bool ? rootOnline : rootPath}/${path}`)
		.then((res)=>{
			resolve(res.data);
		}, (err)=>{
			reject(err);
		})
	})
	return promise;
}

const Post = (path, bool, data) => {
	const promise = new Promise((resolve, reject)=>{
		axios.post(`${bool ? rootOnline : rootPath}/${path}`, data)
		.then((res)=>{
			resolve(res);
		}, (err)=>{
			reject(err);
		})
	})
	return promise;
}

const Update = (path,bool,data) =>{
	const promise = new Promise((resolve,reject)=>{
		axios.put(`${bool ? rootOnline : rootPath}/${path}`, data)
		.then((res)=>{
			resolve(res);
		}, (err)=>{
			reject(err);
		})
	})
}

const Delete = (path,data) => {
	console.log(data)
	const promise = new Promise((resolve, reject) =>{	
		axios.delete(`${rootPath}/${path}/${data}`)
		.then((result) => {
			resolve(result);
		}, (err)=>{
			reject(err);
		})
	})
	return promise;
}

const getBlog = () => Get('posts?_sort=id&_order=desc', false);
const getUsers = () => Get('users', true);
const delBlog = (data) => Delete('posts',data);
const postBlog = (data) => Post('posts',false,data);
const updateBlog = (data,id) => Update(`posts/${id}`,false,data);

const API = {
	getBlog,
	getUsers,
	delBlog,
	postBlog,
	updateBlog
}

export default API;