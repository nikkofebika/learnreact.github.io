const redux = require('redux');
const createStore = redux.createStore;

const initState = {
	usia: 10,
	nilai: 1
}

//reducer
const rootReducer = (state = initState, action) =>{
	switch (action.type) {
		case 'ADD_USIA':
			return{
				...state,
				usia: state.usia + 5
			}
			break;
		case 'ADD_NILAI':
			return{
				...state,
				nilai: state.nilai + action.newValue
			}
			break;
		default:
			return state;
			break;
	}
	// console.log(state)
}

//store
const store = createStore(rootReducer);
console.log(store.getState());

//subscription
store.subscribe(()=>{
	console.log('subscribe : ',store.getState())
})

//dispatch
store.dispatch({type: 'ADD_USIA'});
store.dispatch({type: 'ADD_NILAI', newValue: 5});
// console.log(store.getState())