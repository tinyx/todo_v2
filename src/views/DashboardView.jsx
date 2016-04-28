import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import Dashboard from '../lib/components/Dashboard';
import { logoutAndRedirect } from '../lib/actions/authentication';


const DashboardView = React.createClass({
  styles: {

  },
  propTypes: {
    isAuthenticated: PropTypes.bool.isRequired,
    onLogout: PropTypes.func.isRequired
  },
  render() {
    return (
      <div>
        <Dashboard onLogout={this.props.onLogout}/>
      </div>
    );
  }
});

export default connect(
  state => ({
    isAuthenticated: state.auth.isAuthenticated
  }),
  dispatch => ({
    onLogout: () => {
      console.log('logout');
      dispatch(logoutAndRedirect());
    }
  })
)(DashboardView);
