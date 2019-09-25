import React, { Component, Fragment } from 'react';
import './LifeCycle.css';
// import {RootContext} from '../../Home/Home'
// import {connect} from 'react-redux';
import {GlobalConsumer} from '../../../context/context';

class LifeCycle extends Component{
	constructor(props){
		super(props);
		this.state = {
			count: 1
		}
		console.log('constructor');
	}

	static getDerivedStateFromProps(props, state){
		console.log('getDerivedStateFromProps');
		return null;
	}

	componentDidMount(){
		console.log('componentDidMount');
		// setTimeout(()=>{
		// 	this.setState({
		// 	count: 2
		// 	})
		// }, 2000);
	}

	shouldComponentUpdate(nextProps, nextState){
		console.group('shouldComponentUpdate');
		console.log('nextProps: ',nextProps);
		console.log('nextState: ',nextState);
		console.groupEnd();
		if (nextState.count > 5) {
			return false
		}
		return true
	}

	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log('getSnapshotBeforeUpdate');
		return null
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		console.log('componentDidUpdate');
	}

	componentWillUnmount(){
		console.log('componentWillUnmount');
	}

	changeCount = () =>{
		this.setState({
			count: this.state.count + 1
		})
	}

	render(){
		console.log(this);
		return(
						<Fragment>
							<div>
							<h3>React Life Cycle</h3>
							<hr/>
							<button className="btn" onClick={this.changeCount}>Life Cycle {this.state.count}</button>
							<hr/>
							{/*<p>Total Order : {this.props.order}</p>*/}
							<p>Total Order : {this.props.state.totalOrder}</p>
							</div>
						</Fragment>
			)
	}
}

// const mapStateToProps = (state) =>{
// 	return{
// 		order: state.totalOrder
// 	}
// }
// export default connect(mapStateToProps)(LifeCycle);
export default GlobalConsumer(LifeCycle);