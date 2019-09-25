import React from 'react';

const Blogs = (props) => {
	return(
		<div className="row">
			<div className="leftcolumn">
				<div className="card">
					<h2 className="blog-title" onClick={()=>props.detail(props.data.id)}>{props.data.title}</h2>
						<img  src="https://placeimg.com/400/200/animals" alt="Img" />
					<p>{props.data.body}</p>
					<button className="btn-del" onClick={()=>props.remove(props.data.id)}>Hapus</button>
					<button className="btn-update" onClick={()=>props.update(props.data)}>Update</button>
				</div>
			</div>
		</div>
	)
}

export default Blogs;