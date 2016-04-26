import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import LoginForm from '../lib/components/LoginForm';
import { loginUser } from '../lib/actions/authentication';

const HomeView = React.createClass({
  render() {
    return (
      <div>
        <div>Authenticated: {this.props.isAuthenticated ? 'true' : 'false'}</div>
        <LoginForm onSubmit={this.props.onSubmit}/>
      </div>
    );
  }
});

HomeView.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

export default connect(
  state => ({
    isAuthenticated: state.auth.isAuthenticated 
  }),
  dispatch => ({
    onSubmit: (email, password) => {
      dispatch(loginUser(email, password))
    }
  })
)(HomeView);

