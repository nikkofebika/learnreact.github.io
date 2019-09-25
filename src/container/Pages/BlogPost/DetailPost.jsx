import React, {Component, Fragment} from 'react';
import axios from 'axios';
class DetailPost extends Component{
	state = {
		blog : {
			title: '',
			body: ''
		}
	}
	componentDidMount(){
		console.log(this.props.match.params.postID)
		let id = this.props.match.params.postID
		axios.get(`http://localhost:4444/posts/${id}`).then((res)=>{
			console.log(res)
			this.setState({
				blog: {
					title: res.data.title,
					body: res.data.body,
				}
			})
		})
	}

	render(props){
		return(
			<Fragment>
				<h3>Detail Post</h3>
				<hr/>
				<h4>{this.state.blog.title}</h4>
				<p>{this.state.blog.body}</p>
			</Fragment>
		)
	}
}

export default DetailPost;