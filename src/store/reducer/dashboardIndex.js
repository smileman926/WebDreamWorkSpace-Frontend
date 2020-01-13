import * as actionTypes from '../action/actionTypes';

const initState = {
	toggleSidebar: false,
	index: []
}

export default function dashReducer(state=initState, action) {
	switch (action.type) {
		case actionTypes.TOGGLE_SIDEBAR:			
			return {
				toggleSidebar: !state.toggleSidebar
			}				
		default:
			return state
	}
}