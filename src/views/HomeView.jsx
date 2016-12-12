import React, {PropTypes} from 'react';
import { push } from 'react-router-redux'
import { connect } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const HomeView = React.createClass({
  propTypes: {
    isAuthenticated: PropTypes.bool.isRequired
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentWillMount() {
    if(this.props.isAuthenticated) {
      this.context.router.push('/dashboard');
    }
    else {
      let currentUrl = window.location.href;
      window.location.href = 'http://auth.crabfactory.net/login?redirect=' + currentUrl;
    }
  },
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          {this.props.children}
        </MuiThemeProvider>
      </div>
    );
  }
});

export default connect(
  state => ({
    isAuthenticated: state.auth.isAuthenticated
  })
)(HomeView);
