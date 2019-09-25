import React, { Component } from 'react';
import logoCart from '../Product/cart.jpg';
class CardProduct extends Component{
	state = {
		order: 4
	}

	handleCounterChange = (value) => {
		this.props.onCounterChange(value);
	}

	handPlus = () =>{
		this.setState({
			order: this.state.order + 1
		}, () =>{
			this.handleCounterChange(this.state.order);
		});

	}

	handMinus = () =>{
		if (this.state.order > 0) {
			this.setState({
				order: this.state.order - 1
			}, () =>{
				this.handleCounterChange(this.state.order);
			});
		}else{
			alert('cukup bos');
		}
	}

	render(){
		return(
				<div className="card">
				  <img src="https://www.w3schools.com/w3images/jeans3.jpg" width="100px" alt="Denim Jeans"/>
				  <h1>Tailored Jeans</h1>
				  <p className="price">$1999</p>
				  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
				  <button className="minus" onClick={this.handMinus}>-</button>
				  <input type="text" value={this.state.order} />
				  <button className="plus" onClick={this.handPlus}>+</button>
				</div>
		)
	}
}

export default CardProduct;