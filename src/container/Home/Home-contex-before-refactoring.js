import React, { Fragment, createContext } from 'react';
import './Home.css';
import LifeCycle from '../Pages/LifeCycle/LifeCycle';
import Product from '../Pages/Product/Product';
import Counter from '../Pages/CardProduct/Counter';
import BlogPost from '../Pages/BlogPost/BlogPost';
import DetailPost from '../Pages/BlogPost/DetailPost';
import Youtube from '../Pages/Youtube/Youtube';
import {BrowserRouter, Route, Link} from 'react-router-dom'

export const RootContext = createContext();
const Provider = RootContext.Provider; //unutk menyimpan state global

class Home extends React.Component{
	state = {
		totalOrder: 2,
		// showComponent: true
	}

	dispatch = (action) =>{
		if (action.type === 'PLUS_ORDER') {
			return this.setState({
				totalOrder: this.state.totalOrder + 1
			})
		}
		if (action.type === 'MIN_ORDER') {
			if (this.state.totalOrder > 0) {				
				return this.setState({
					totalOrder: this.state.totalOrder - 1
				})
			}
		}
	}

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
				<Provider value={
					{
						state: this.state,
						dispatch: this.dispatch
					}
				}>
					<Fragment>
						<div>
						{/*<div>
							<YoutubeComp desc="Deskripsi 1" />
							<YoutubeComp desc="Deskripsi 2" />
							<YoutubeComp desc="Deskripsi 3" />
							<YoutubeComp />
						</div>
						<div>
						{
							this.state.showComponent ? <LifeCycle/> : null
						}
						</div>
						<BlogPost />
						<Product />*/}
						<div className="navbar">
							<Link to="/">Home</Link>
							<Link to="/product">Product</Link>
							<Link to="/lifecycle">lifecycle</Link>
							<Link to="/youtube">Youtube</Link>
							<Link to="/counter">Counter</Link>
						</div>
						<br/>
						<Route path="/" exact component={BlogPost}/>
						<Route path="/detail-post/:postID" component={DetailPost}/>
						<Route path="/product" component={Product}/>
						<Route path="/lifecycle" component={LifeCycle}/>
						<Route path="/youtube" component={Youtube}/>
						<Route path="/counter" component={Counter}/>
						</div>
					</Fragment>
				</Provider>
			</BrowserRouter>
		)
	}
}

export default Home;