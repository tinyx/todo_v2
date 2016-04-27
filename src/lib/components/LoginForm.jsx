import React from 'react';
import CircularProgress from 'material-ui/lib/circular-progress';
import Colors from 'material-ui/lib/styles/colors';
import FontIcon from 'material-ui/lib/font-icon';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';


const style = {
  paper: {
    height: 400,
    width: 350,
    margin: '100px auto',
    textAlign: 'center',
    paddingTop: 65
  },
  fontIcon: {
    display: 'block',
    fontSize: '7em',
    cursor: 'default'
  },
  textField: {
  },
  raisedButton: {
    width: 260,
    marginTop: 20
  },
  nonFieldError: {
    fontSize: '12px',
    lineHeight: '12px',
    color: 'rgb(244, 67, 54)'
  },
  circularProgress: {
    marginTop: 20
  }
};

const LoginForm = React.createClass({
  getInitialState() {
    return {
      email: '',
      password: ''
    }
  },
  propTypes: {
    onSubmit: React.PropTypes.func.isRequired
  },
  onEmailChange(e) {
    this.setState({ email: e.target.value });
  },
  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  },
  onSubmit(e) {
    this.props.onSubmit(this.state.email, this.state.password);
  },
  render() {
    return (
      <div>
        <Paper style={style.paper} zDepth={3}>
          <FontIcon className="material-icons" style={style.fontIcon} color={Colors.grey700}>account_circle</FontIcon>
          <TextField hintText="Email" style={style.textField} 
            onChange={this.onEmailChange} onEnterKeyDown={this.onSubmit}
            errorText={this.props.emailError}/>
          <TextField hintText="Password" type="password" 
            onChange={this.onPasswordChange} onEnterKeyDown={this.onSubmit}
            errorText={this.props.passwordError}/>
          <div style={style.nonFieldError}>{this.props.nonFieldError}</div>
          {this.props.isAuthenticating ? <CircularProgress style={style.circularProgress} size={.7}/> :
            <RaisedButton label="Login" secondary={true} style={style.raisedButton} onMouseDown={this.onSubmit}/>
          }
        </Paper>
      </div>
  )}
})

export default LoginForm;
