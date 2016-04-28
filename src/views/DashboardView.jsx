import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import Dashboard from '../lib/components/Dashboard';
import { logoutAndRedirect } from '../lib/actions/authentication';
import { getEventClassData, selectEventClass } from '../lib/actions/todo';


const DashboardView = React.createClass({
  styles: {

  },
  propTypes: {
    isAuthenticated: PropTypes.bool.isRequired,
    onLogout: PropTypes.func.isRequired,
    classes: PropTypes.array.isRequired,
    token: PropTypes.string.isRequired
  },
  componentDidMount() {
    this.props.getClasses(this.props.token);
  },
  render() {
    return (
      <div>
        <Dashboard onLogout={this.props.onLogout}
          classes={this.props.classes} currentClass={this.props.currentClass}
          onClassClick={this.props.onClassClick}
          />
      </div>
    );
  }
});

export default connect(
  state => ({
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
    classes: state.todo.classes,
    currentClass: state.todo.currentClass
  }),
  dispatch => ({
    onLogout: () => {
      dispatch(logoutAndRedirect());
    },
    getClasses: (token) => {
      dispatch(getEventClassData(token));
    },
    onClassClick: (id) => {
      dispatch(selectEventClass({
        data: id
      }));
    }
  })
)(DashboardView);
