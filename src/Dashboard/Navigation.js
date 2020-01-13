import React from 'react';
//import NavSearch from '../component/navSearch';
import './Navigation.css'
import {HomeOutlined, Search, Add, InfoOutlined, NotificationsNone} from '@material-ui/icons'
import sideBar from './sideBar'
import {toggleSidebar} from '../store/action/dashboardActions'
import {connect} from 'react-redux';


class NavBar extends React.Component{
	constructor(props){
		super(props);
		
	}
	
	render(){
		const mark = this.props.userFirstLetter
		return (
			<div>
			<nav className="navbar navbar-expand-sm navbar-dark fixed-top">
			  
			  <ul className="navbar-nav">
			    <li className="nav-item">
			      <button className='nav_btn'><HomeOutlined style={{color: 'white'}}/></button>
			    </li>
			    <li className="nav-item">
			      <button className='nav_btn' onClick={this.props.toggleSidebar}>boards</button>
			    </li>
			    <li className="nav-item input-group customSearch">
					<input type='search' className='navsearch'/>
					<div className="input-group-append" style={{marginLeft: '0px'}}>
					    <a className="btn btn-search" type="submit"><Search className="searchBtn" style={{color:'white'}} /></a>
					</div>			    	
			    </li>
			  </ul>
			  <img alt="Trello" className="trello-logo" src="/images/trello-logo.svg"/>
			  <ul className="navbar-nav right">
				  <li className="nav-item">
				  	<button className="nav_btn"><Add /></button>
				  </li>
				  <li className="nav-item">
				  	<button className="nav_btn"><InfoOutlined /></button>
				  </li>
				  <li className="nav-item">
				  	<button className="nav_btn"><NotificationsNone /></button>
				  </li>
				  <li className="nav-item">
				  	<button className="nav_btn circle">{mark}</button>
				  </li>
			  </ul>
			</nav>
			</div>
				

			
		)
	}
}
const mapDispatchToProps = dispatch => {
	return {
		toggleSidebar: ()=> dispatch(toggleSidebar())
	}
}
export default connect(null, mapDispatchToProps)(NavBar);



