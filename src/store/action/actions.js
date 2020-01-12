import * as actionTypes from './actionTypes';
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";


export const getPageData = () => {
	return  dispatch => {
		 fetch('pageData.json')
			.then(async response=>{
				 response.ok
		          ? dispatch({type: actionTypes.getPageDatas, pagedatas: await response.json()})
		          : Promise.reject(`Can't communicate with REST API server (${response.statusText})`)		
			})
			.catch(err=>{
				console.log(err);
			});
	}
}
export const registerUser = (userData, history) => {
	
	return  dispatch => {

	axios
		.post('http://localhost:3000/api/users/register', userData)
		// .then(()=>console.log('ok'))
		.then(res=> history.push('/login'))
		.catch(err=>
			dispatch({
				type:actionTypes.GET_ERRORS,
				payload: err.response.data
			})
			
			)
			//console.log(err.response.data))
		//
	}
}
export const googleUser = ()=> {
	return dispatch=>{
		axios.get('http://localhost:3000/auth/google');
	}
	
}
export const loginUser = (userData) => {
	return dispatch => {
	axios
		.post('http://localhost:3000/api/users/login', userData)
		.then(res=>{
			const {token} = res.data;
			localStorage.setItem("jwtToken", token);
			setAuthToken(token);

			const decoded = jwt_decode(token);
			
			dispatch(setCurrentUser(decoded));
		})
		.catch(err=>
			dispatch({
				type:actionTypes.GET_ERRORS,
				payload: err.response.data
			})
			);
	}
}
export const setCurrentUser = decoded=> {
	return {
		type: actionTypes.SET_CURRENT_USER,
		payload: decoded
	}
}
export const logoutUser = () =>dispatch=> {
	localStorage.removeItem('jwtToken');
	setAuthToken(false);
	dispatch(setCurrentUser({}));
}

