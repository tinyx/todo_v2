import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import LoginForm from '../lib/components/LoginForm';
import { loginUser } from '../lib/actions/authentication';

const HomeView = React.createClass({
  render() {
    return (
      <div>
        <div>Authenticated: {this.props.isAuthenticated ? 'true' : 'false'}</div>
        <LoginForm emailError={this.props.emailError} passwordError={this.props.passwordError}
          nonFieldError={this.props.nonFieldError} isAuthenticating={this.props.isAuthenticating}
          onSubmit={this.props.onSubmit}/>
      </div>
    );
  }
});

HomeView.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

export default connect(
  state => ({
    isAuthenticated: state.auth.isAuthenticated,
    isAuthenticating: state.auth.isAuthenticating,
    emailError: state.auth.emailError,
    passwordError: state.auth.passwordError,
    nonFieldError: state.auth.nonFieldError
  }),
  dispatch => ({
    onSubmit: (email, password) => {
      dispatch(loginUser(email, password))
    }
  })
)(HomeView);

