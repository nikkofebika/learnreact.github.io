import React, { Component,Fragment } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import './Product.css';
import logoCart from './cart.jpg';
// import {connect} from 'react-redux';
// import {RootContext} from '../../Home/Home';
import {GlobalConsumer} from '../../../context/context';
class Product extends Component{
	// state = {
	// 	order: 4
	// }

	// handleCounterChange = (newValue) =>{
	// 	this.setState({
	// 		order: newValue
	// 	});
	// }

	render(){
		return(
							<fragment>
							<h3>Product Card</h3>
								<hr/>
							<center><img src={logoCart} width="50px" alt="Denim Jeans"/>
							{/*<div className="count">{this.props.order}</div></center>*/}
							<div className="count">{this.props.state.totalOrder}</div></center>
							{/*<CardProduct onChangeCounter={(val) => this.handleCounterChange(val)} />*/}
							<CardProduct/>
							</fragment>
		);
	}
}

// const mapStateToProps = (state) =>{
// 	return{
// 		order: state.totalOrder
// 	}
// }

// export default connect(mapStateToProps)(Product);
export default GlobalConsumer(Product);