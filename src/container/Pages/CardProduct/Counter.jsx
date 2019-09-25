import React, { Component, Fragment } from 'react';
// import {connect} from 'react-redux';
// import {RootContext} from '../../Home/Home'
import {GlobalConsumer} from '../../../context/context';

class Counter extends Component{
	// state = {
	// 	order: 4
	// } sudah tidak berfungsi karena sudah menggunakan state global yang ada di index.js

	handleCounterChange = (value) => {
		this.props.onChangeCounter(value);
	}

	// handPlus = () =>{
	// 	this.setState({
	// 		order: this.state.order + 1
	// 	}, () =>{
	// 		this.handleCounterChange(this.state.order)
	// 	});
	// }

	// handMinus = () =>{
	// 	if (this.state.order > 0) {
	// 		this.setState({
	// 			order: this.state.order - 1
	// 		}, () =>{
	// 			this.handleCounterChange(this.state.order)
	// 		});
	// 	}else{
	// 		alert('cukup')
	// 	}
	// }
	render(){
		// console.log(this.props)
		return(
			
							<fragment>
								{/*<button className="minus" onClick={this.props.handMinus}>-</button>*/}
								<button className="minus" onClick={()=>this.props.dispatch({type: 'MIN_ORDER'})}>-</button>
								<input type="text" value={this.props.state.totalOrder} />
								<button className="plus" onClick={()=>this.props.dispatch({type: 'PLUS_ORDER'})}>+</button>
								{/*<button className="plus" onClick={this.props.handPlus}>+</button>*/}
							</fragment>
		)
	}
}

{/*const mapStateToProps = (state) =>{
	return{
		order: state.totalOrder
	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		handPlus: () => dispatch({type: 'PLUS_ORDER'}),
		handMinus: () => dispatch({type: 'MIN_ORDER'})
	}
}*/}

export default GlobalConsumer(Counter);
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// export default connect(state, dispatch)(Counter);
//state = state global yang ada di index.js