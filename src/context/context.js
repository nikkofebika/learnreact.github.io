import React, {Component, createContext} from 'react';

const RootContext = createContext();

//HOC(High Order Component) for Provider
const Provider = RootContext.Provider; //unutk menyimpan state global
const GlobalProvider = (Children) =>{
	return(
		class ParentComp extends Component{
			state = {
				totalOrder: 2
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

			render(){
				return(
					<Provider value={
						{
							state: this.state,
							dispatch: this.dispatch
						}
					}>
						<Children {...this.props}/>
					</Provider>
				)
			}
		}
	)
}

export default GlobalProvider;

export const GlobalConsumer = (Child) =>{
	return(
		class ParentConsumer extends Component{
			render(){
				return(
					<RootContext.Consumer>
					{
						value => {
							return(
								<Child {...this.props} {...value}/>
							)
						}
					}
					</RootContext.Consumer>
				)
			}
		}
	)
}