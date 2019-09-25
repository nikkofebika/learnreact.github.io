import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import HelloComponent from './component/HelloComponent';
// import StatefullComponent from './container/StatefullComponent';
// import YoutubeComp from './component/YoutubeComp/YoutubeComp';
import Home from './container/Home/Home';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import rootReducer from './redux/reducer/globalRootReducer';
// import Product from './container/Product/Product';
// import LifeCycle from './container/LifeCycle/LifeCycle';
// import BlogPost from './container/BlogPost/BlogPost';

// const HelloComponent = () => {
// 	return <h1>Stateless Component / Functional Componen</h1>
// }

// class StatefullComponent extends React.Component {
// 	render(){
// 		return(
// 			<h3>This is Statefull Component / Class Component</h3>
// 		)
// 	}
// }

// const globalState = {
// 	totalOrder: 0
// }

// const rootReducer = (state = globalState, action) =>{
// 	if (action.type === 'PLUS_ORDER') {
// 		return{
// 			...state,
// 			totalOrder: state.totalOrder + 1
// 		}
// 	}
// 	if (action.type === 'MIN_ORDER') {
// 		// if (state.totalOrder > 0) {
// 		// 	return{
// 		// 		...state,
// 		// 		totalOrder: state.totalOrder - 1
// 		// 	}
// 		// }
// 		var totOrder = 0
// 		if (state.totalOrder > 0) {
// 			totOrder = state.totalOrder - 1
// 		}
// 		return{
// 			...state,
// 			totalOrder: totOrder
// 		}
// 	}
// 	return state;
// } dipisahkan agar lebih rapih

{/*const storeRedux = createStore(rootReducer);*/}

{/*ReactDOM.render(<Provider store={storeRedux}><Home /></Provider>, document.getElementById('root'));*/}
ReactDOM.render(<Home />, document.getElementById('root'));

	// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
