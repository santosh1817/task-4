//import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  {logoutUser}  from '../../actions/userActions';
import React, { Component } from 'react'

class Logout extends Component {
    constructor(props){
        super(props)
        this.props.logoutUser()
        this.props.handleAuthentication(false)
        props.history.push('/users/login')
    }
    

    render() {
        return (
            <div>
                
            </div>
        )
    }
}


Logout.propTypes = {
    logoutUser: PropTypes.func.isRequired
    //user: PropTypes.array.isRequired,
    //newPost: PropTypes.object
};
  
const mapStateToProps = state => ({
user: state.user.item
});
export default connect(mapStateToProps, { logoutUser })(Logout);