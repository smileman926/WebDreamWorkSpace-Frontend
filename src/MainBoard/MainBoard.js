import React, {useEffect} from "react";
import SideBar from "../Dashboard/sideBar";
import BoardBar from "./boardBar.js";
import {connect} from "react-redux";



function MainBoard(props) {
	const tokenUrl = localStorage.getItem("tokenUrl")
	
	const {open} = props;
	const h = window.innerHeight;
	const [height, setHeight] = React.useState(h)

	useEffect(() => {
	    function handleResize() {
	    	setHeight(window.innerHeight);
	      
	    }

	    window.addEventListener('resize', handleResize);
	    return () => window.removeEventListener('resize', handleResize);
	  	}, []);
	const {_id, title, backgroundImageUrl, isStarred} = props.board
	const boardBarV = {
		title: title,
		isStarred: isStarred,
		username: props.username
	}
	

	 return (
	 	<div style={{ height: `${height}px`, backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: '100% 100%'}}>
	 		<SideBar open={open} />
		 	<BoardBar {...boardBarV} />
		 	<h1>this a ppage</h1>
		 	<h1>this a ppage</h1>
		 	<h1>this a ppage</h1>
		</div>
	 	)
}
const mapStateToProps = (state,ownProps) => {
    return {
        board: state.dashs.board,
        open: ownProps.open,
        username: state.auth.user.username
    }   
}
//  const mapDispatchToProps = dispatch=> {
//     return {
//         addRecent: (a)=>dispatch(addRecent(a)),
//         addStar: (a,b)=>dispatch(addStar(a,b))
//     }
//  }
 export default connect(mapStateToProps, null)(MainBoard);