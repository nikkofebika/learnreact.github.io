//1. STORE
//2. REDUCER
//3. DISPATCH / ACTION
//4. SUBSCRIPTION
const redux = require('redux');
const createStore = redux.createStore;

const initState = {
	usia: 1,
	nilai: 0
}

//REDUCER
const rootReducer = (state = initState, action) =>{
	// console.log(action)
	if (action.type === 'ADD_USIA') {
		return {
			...state,
			usia: state.usia + 10
		}
	}
	if (action.type === 'ADD_NILAI') {
		return {
			...state,
			nilai: state.nilai + action.newValue
		}
	}
	return state;
}

//STORE
const store = createStore(rootReducer);
console.log(store.getState())

//SUBSCRIPTION
store.subscribe(() =>{
	console.log('store change : ', store.getState())
})

//DISPATCH / ACTION
store.dispatch({type: 'ADD_USIA'});
store.dispatch({type: 'ADD_NILAI', newValue: 12 });
console.log(store.getState())
