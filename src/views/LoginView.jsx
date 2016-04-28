import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import LoginForm from '../lib/components/LoginForm';
import { loginUser } from '../lib/actions/authentication';

const LoginView = React.createClass({
  propTypes: {
    isAuthenticated: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired
  },
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
)(LoginView);

