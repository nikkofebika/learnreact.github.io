import ActionType from './globalActionType';

const globalState = {
	totalOrder: 0
}

const rootReducer = (state = globalState, action) =>{
	if (action.type === ActionType.PLUS_ORDER) {
		return{
			...state,
			totalOrder: state.totalOrder + 1
		}
	}
	if (action.type === ActionType.MIN_ORDER) {
		// if (state.totalOrder > 0) {
		// 	return{
		// 		...state,
		// 		totalOrder: state.totalOrder - 1
		// 	}
		// }
		var totOrder = 0
		if (state.totalOrder > 0) {
			totOrder = state.totalOrder - 1
		}
		return{
			...state,
			totalOrder: totOrder
		}
	}
	return state;
}

export default rootReducer;