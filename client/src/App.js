import React from 'react';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import Register from './Components/User/Register';
import Login from './Components/User/Login';
import axios from 'axios';
import './app.css';
import CreateReservation from './Components/Reservation/CreateReservation'
import ListReservation from './Components/Reservation/ListReservation'
import Home from './Components/Home/Home'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  {logoutUser}  from './actions/userActions';
import Logout from './Components/User/Logout'

import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isAuthenticated: false 
    }
  }
  // handle page reloading, if the user is logged in, continue to login
  componentDidMount() {
    if(localStorage.getItem('token')) {
      this.setState(() => ({ 
        isAuthenticated: true 
      }))
    }
  }

  handleAuthentication = (boolean) => {
    this.setState(() => ({
      isAuthenticated: boolean
    }))
  }

  render() {
    return(
      <Provider store={store}>
      <BrowserRouter>
      
        <div className="container">
          
          <div className="pt-5">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
              <ul className="navbar-nav mr-auto">
                {this.state.isAuthenticated ? (
                 
                  <div className=" navitems1 "> 
                  <li className="nav-item ml-4"><Link to="/" >Home</Link></li>
                  <li className="nav-item ml-4"><Link to="/reservation/create" >Create reservation</Link></li>
                  <li className="nav-item ml-4"><Link to="/reservation/view" >View reservation</Link></li>
                  <li className="nav-item ml-4"><Link to="/users/logout" >Logout</Link></li>
                  </div>
              

                  ) : (
                  <div className="navitems1">
                    <li className="nav-item ml-5"><Link to="/" >Home</Link></li>
                    <li className="nav-item ml-5"><Link to="/users/register">Register</Link></li>
                    <li className="nav-item ml-5"><Link to="/users/login">Login</Link></li>
                    
                  </div>
                )}
              </ul>
            </nav>

          </div>
          <Switch>
          <Route path="/" exact={true} component={ Home } />
          <Route path="/reservation/view" component={ ListReservation } />
          <Route path="/reservation/create" component={ CreateReservation } />
          <Route path="/users/register" component={ Register } />
          <Route path="/users/login" render={(props) => {
              return <Login {...props} handleAuthentication={this.handleAuthentication} />
          }} />

          <Route path="/users/logout" render={(props) => {
              return <Logout {...props} handleAuthentication={this.handleAuthentication} />
          }} />

        </Switch>
       
       
        </div>
          
        
      </BrowserRouter>  
      
      
      </Provider>
    )
    
  }
}


export default App;
//export default connect(mapStateToProps, { logoutUser })(App);
