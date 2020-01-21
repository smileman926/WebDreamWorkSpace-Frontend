import * as actionTypes from "./actionTypes";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";
import jwt from "jsonwebtoken";


export const getPageData = () => {
	return  dispatch => {
		 fetch("pageData.json")
			.then(async response=>{
				 response.ok
		          ? dispatch({type: actionTypes.getPageDatas, pagedatas: await response.json()})
		          : Promise.reject(`Can"t communicate with REST API server (${response.statusText})`)		
			})
			.catch(err=>{
				console.log(err);
			});
	}
}
export const registerUser = (userData, history) => {
	
	return  dispatch => {

	axios
		.post("http://localhost:3000/api/users/register", userData)
		// .then(()=>console.log("ok"))
		.then(res=> history.push("/login"))
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
		axios.get("http://localhost:3000/auth/google");
	}
	
}
export const loginUser = (userData) => {
	return dispatch => {
	axios
		.post("http://localhost:3000/api/users/login", userData)
		.then(res=>{
			const {token} = res.data;
			localStorage.setItem("jwtToken", token);
			setAuthToken(token);

			const decoded = jwt_decode(token);
			
    		const tokenUrl = jwt.sign(decoded.username, "secret")
			localStorage.setItem("tokenUrl", tokenUrl);
			
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
	localStorage.removeItem("jwtToken");
	setAuthToken(false);
	dispatch(setCurrentUser({}));
}
export const addInfo = info=> {
	
	return {
		type: actionTypes.ADD_INFO,
		payload: info
	}
}
export const addList = title=> {
	const newobj = {
		title: title,
		contents: []
	}
	return {
		type: actionTypes.ADD_LIST,
		payload: newobj
	}
}
export const addContent = (content, title)=> {
	return {
		type: actionTypes.ADD_CONTENT,
		title: title,
		content: content 
	}
}

