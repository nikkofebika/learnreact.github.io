import React, { Fragment } from 'react';
import './Home.css';
import LifeCycle from '../Pages/LifeCycle/LifeCycle';
import Product from '../Pages/Product/Product';
import Counter from '../Pages/CardProduct/Counter';
import BlogPost from '../Pages/BlogPost/BlogPost';
import DetailPost from '../Pages/BlogPost/DetailPost';
import Youtube from '../Pages/Youtube/Youtube';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import GlobalProvider from '../../context/context';
import Hooks from '../Pages/Hooks/Hooks';

class Home extends React.Component{

	componentDidMount(){
		// setTimeout(()=>{
		// 	this.setState({
		// 		showComponent: false
		// 	})
		// }, 5000);
	}

	render(){
		return(
			<BrowserRouter>
				<Fragment>
					<div>
						<div className="navbar">
							<Link to="/">Home</Link>
							<Link to="/product">Product</Link>
							<Link to="/lifecycle">lifecycle</Link>
							<Link to="/youtube">Youtube</Link>
							<Link to="/counter">Counter</Link>
							<Link to="/hooks">Hooks</Link>
						</div>
						<br/>
						<Route path="/" exact component={BlogPost}/>
						<Route path="/detail-post/:postID" component={DetailPost}/>
						<Route path="/product" component={Product}/>
						<Route path="/lifecycle" component={LifeCycle}/>
						<Route path="/youtube" component={Youtube}/>
						<Route path="/counter" component={Counter}/>
						<Route path="/hooks" component={Hooks}/>
					</div>
				</Fragment>
			</BrowserRouter>
		)
	}
}

export default GlobalProvider(Home);