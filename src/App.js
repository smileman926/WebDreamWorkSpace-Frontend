import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./LandingPage";
import SignUp from "./Container/SignUp/SignUp";
import LogIn from "./Container/SignIn/SignIn";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from './Container/Dashboard';
import PrivateRoute from './Components/PrivateRoute';
//import {connect} from 'react-redux';


class App extends React.Component {
  


  componentDidMount() {

  }
  render() {

    return (
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
        <Switch>
          <PrivateRoute exact path="/:username/dashboard" component={Dashboard} />
        </Switch>
      </Router>
      )
  }
}
// const mapDispatchStateToProps = dispatch=>{
//   setCurrentUser: (a)=>dispatch(setCurrentUser(a))
// }
// export default connect(null, mapDispatchStateToProps)(App);

export default App;