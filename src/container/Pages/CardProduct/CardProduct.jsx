import React, { Component } from 'react';
import Counter from './Counter';

class CardProduct extends Component{
	// handleCounterChange = (value) => {
	// 		this.props.onChangeCounter(value);
	// 	}


	render(){
		return(
			<div className="card">
				<img src="https://www.w3schools.com/w3images/jeans3.jpg" width="100px" alt="Denim Jeans"/>
				<h1>Tailored Jeans</h1>
				<p className="price">$1999</p>
				<p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
				{/*<Counter onChangeCounter={(val)=>this.props.onChangeCounter(val)} />*/}
				<Counter />

			</div>
			);
	}
}

export default CardProduct;