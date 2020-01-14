import * as actionTypes from "./actionTypes";


export const toggleSidebar = () => {
	return {
		type: actionTypes.TOGGLE_SIDEBAR
	}
}
export const addRecent = (txt) => {
	return {
		type: actionTypes.ADD_RECENT,
		payload: txt
	}
}
export const addStar = (txt,isLike) =>{

	if (isLike) {
		return dispatch=>{
			dispatch(removeStar(txt))
			dispatch(addRecent(txt))
		}
		
	}
	else {
		return dispatch=> {
		dispatch({
			type: actionTypes.ADD_STAR,
			payload: txt
		})
		dispatch(removeRecent(txt))
		
		}
	}
	
}
export const removeRecent = (txt)=>{
	return {
		type: actionTypes.REMOVE_RECENT,
		payload: txt
	}
}
export const removeStar = (txt)=> {
	return {
		type: actionTypes.REMOVE_STAR,
		payload: txt
	}
}