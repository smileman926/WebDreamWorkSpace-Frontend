import React from 'react';
import SideBar from './sideBar';
import {connect} from 'react-redux'
import DashboardSidebar from './components/sidebar-container';
import UserBoard from './components/user-boards';
import './dashboard.css'

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
				<div className='dashboard-container'>
			      <div className='dashboard-sidebar'>
			        <DashboardSidebar />
			      </div>
			      <div className='all-board'>
			        <UserBoard />
			      </div>
			    </div>
			    <p>Hello <strong>{user.username}!</strong> Welcome to Dashboard.</p>
				<input type="button" className="btn btn-primary" value="Log Out" onClick={this.handleClick}/>
			</div>
			)
	}
}
export default Dashboard;
// const mapStateToProps = state =>({
// 	dash: state.dash,
// })
// export default connect(mapStateToProps, null)(Dashboard);
