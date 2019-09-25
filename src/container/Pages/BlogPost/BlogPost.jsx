import React, {Component, Fragment} from 'react';
import Blogs from '../../../component/Blogs/Blogs';
import axios from 'axios';
import './BlogPost.css';
import API from '../../../services'

class BlogPost extends Component{
	constructor(){
		super();
		this.state ={
			blogs: [],
			formBlog: {
				'userId': 1,
			    'id': 1,
			    'title': '',
			    'body': ''
			},
			isUpdate: false,
			users: []
		}
	}

	handleGetAPI = () => {
		API.getBlog().then((result)=>{
			this.setState({
				blogs: result
			})
		});

		API.getUsers().then((result)=>{
			console.log(result)
			this.setState({
				users: result
			})
		})
		// return axios.get('http://localhost:4444/posts?_sort=id&_order=desc')
		// .then((res)=>{
		// 	this.setState({
		// 		blogs: res.data
		// 	})
		// })
		// .catch((error)=> {
		//     console.log(error);
		//   })
		//   .finally(()=> {
		//     // alert('Ini pake Axios');
		//   });
	}

	handlePostAPI = () =>{
		API.postBlog(this.state.formBlog).then(res=>{
			console.log(res);
			alert('blog berhasil ditambahkan');
			this.handleGetAPI();
			this.setState({
				formBlog: {
				'userId': 1,
			    'id': 1,
			    'title': '',
			    'body': ''
				}
			})
		});
		// axios.post('http://localhost:4444/posts', this.state.formBlog).then((res)=>{
		// 	alert('blog berhasil ditambahkan');
		// 	this.handleGetAPI();
		// 	this.setState({
		// 		formBlog: {
		// 		'userId': 1,
		// 	    'id': 1,
		// 	    'title': '',
		// 	    'body': ''
		// 		}
		// 	})
		// })
		// .catch((error)=> {
		//     console.log(error);
		//   })
		//   .finally(()=> {
		//     // alert('bodoamat');
		//   });
	}

	handlePutAPI = () =>{
		API.updateBlog(this.state.formBlog, this.state.formBlog.id).then(res => {
			this.handleGetAPI();
			this.setState({
				formBlog: {
					'userId': 1,
					'id': 1,
					'title': '',
					'body': ''
				},
				isUpdate: false
			});
		});
		// axios.put(`http://localhost:4444/posts/${this.state.formBlog.id}`, this.state.formBlog).then((res)=>{
		// 	alert('blog berhasil diupdate');
		// 	this.handleGetAPI();
		// 	this.setState({
		// 		formBlog: {
		// 			'userId': 1,
		// 		    'id': 1,
		// 		    'title': '',
		// 		    'body': ''
		// 			},
		// 			isUpdate: false
		// 	})
		// })
		// .catch((error)=> {
		//     console.log(error);
		//   })
		//   .finally(()=> {
		//     // alert('bodoamat');
		//   });
	}

	handleChange = (e) =>{
		// console.log(e.target.name);
		// console.log(e.target.value);
		var newFormBlog = {...this.state.formBlog};
		let timestamp = new Date().getTime();
		newFormBlog[e.target.name] = e.target.value;
		if (!this.state.isUpdate) {
			newFormBlog['id'] = timestamp;
		}
		// var title = e.target.value;
		this.setState({
			formBlog: newFormBlog
		},()=>{
			// console.log('formBlog new : ',this.state.formBlog);
		})

	}

	handleDetail = (id) =>{
		console.log(id)
		console.log(this.props)
		this.props.history.push(`/detail-post/${id}`)
	}

	handleSubmit = () =>{
		if (this.state.isUpdate) {
			this.handlePutAPI();
		}else{
			this.handlePostAPI();
		}
	}

	handleUpdate = (data) =>{
		console.log(data);
		console.log('form baru:',data);
		this.setState({
			formBlog: data,
			isUpdate: true
		})
	}

	handleRemove = (data) =>{
		// console.log(data);

		API.delBlog(data).then((result)=>{
			console.log(result);
			if (result.statusText == 'OK') {
			this.handleGetAPI();
			alert('berhasil hapus')
			}
		})

		// axios.delete(`http://localhost:4444/posts/${data}`)
		//   .then((response) => {
		//     console.log(response);
		//     this.handleGetAPI();
		//   })
		//   .catch((error)=> {
		//     // console.log(error);
		//     alert('GOBLOG')
		//   })
		//   .finally(()=> {
		//     alert('Berhasil dihapus');
		//   });
	}

	// static getDerivedStateFromProps(props, state){
	// 	console.log('getDerivedStateFromProps')
	// 	return null
	// }

	// shouldComponentUpdate(nextProps, nextState){
	// 	console.log('shouldComponentUpdate')

	// 	return true
	// }

	// getSnapshotBeforeUpdate(prevProps, prevState){
	// 	console.log('getSnapshotBeforeUpdate');
	// 	return null
	// }

	// componentDidUpdate(prevProps, prevState, snapshot){
	// 	console.log('componentDidUpdate');
	// }

	// componentWillUnmount(){
	// 	console.log('componentWillUnmount');
	// }

	componentDidMount(){
		// console.log('componentDidMount');
		// fetch('https://jsonplaceholder.typicode.com/posts')
		// .then(response => response.json())
		// .then(json =>{
		// 	this.setState({
		// 		blogs: json
		// 	})
		// })

		this.handleGetAPI();
	}

	render(){
		// console.log('render')
		return(
			<Fragment>
				<h3>Blogs</h3>
				<hr/>
				  <div className="container">
					  <div className="form-group">
					    <label><b>Title</b></label>
					    <input className="form-control" value={this.state.formBlog.title} type="text" placeholder="Enter Title" name="title" onChange={this.handleChange}/>
					  </div>
					  <div className="form-group">
					    <label><b>Blog Content</b></label>
					    <textarea className="form-control" value={this.state.formBlog.body} rows="5" placeholder="Enter Content" name="body" onChange={this.handleChange}></textarea>
					    <button type="submit" onClick={this.handleSubmit} className="btn btn-primary btn-block">Simpan</button>
					  </div>
				  </div>
				{
					this.state.blogs.map(blog => {
						return <Blogs key={blog.id} data={blog} remove={(val)=>this.handleRemove(val)} update={(val)=>this.handleUpdate(val)} detail={this.handleDetail} />
					})
				}
			</Fragment>
			)
	}
}

export default BlogPost;