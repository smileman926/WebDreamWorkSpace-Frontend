import React from "react";
import SideBar from "./sideBar";
import {connect} from "react-redux"
import DashboardSidebar from "./components/sidebar-container";
import UserBoard from "./components/user-boards";
import "./dashboard.css"
import jwt from "jsonwebtoken"

class Dashboard extends React.Component {
	constructor(props) {
		super()
	}
	render() {
		const {user} = this.props;
		const {open} = this.props;
		
		return(
			<div>
			<SideBar open={open} />
				<div className="dashboard-container">
			      <div className="dashboard-sidebar">
			        <DashboardSidebar />
			      </div>
			      <div className="all-board">
			        <UserBoard />
			      </div>
			    </div>
			    
			</div>
			)
	}
}
export default Dashboard;
// const mapStateToProps = state =>({
// 	dash: state.dash,
// })
// export default connect(mapStateToProps, null)(Dashboard);
