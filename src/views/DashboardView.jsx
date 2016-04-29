import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import Dashboard from '../lib/components/Dashboard';
import { logoutAndRedirect } from '../lib/actions/authentication';
import { getEventClassData, selectEventClass, getEventData } from '../lib/actions/todo';


const DashboardView = React.createClass({
  styles: {

  },
  propTypes: {
    isAuthenticated: PropTypes.bool.isRequired,
    classes: PropTypes.array.isRequired,
    token: PropTypes.string.isRequired
  },
  componentDidMount() {
    this.props.getClasses(this.props.token);
    this.props.getEvents(this.props.token);
  },
  onRefresh() {
    this.props.onRefresh(this.props.token);
  },
  render() {
    let events = this.props.events.filter(e => e.eventclass === this.props.currentClass);
    return (
      <div>
        <Dashboard classes={this.props.classes} currentClass={this.props.currentClass}
          events={events} isFetchingData={this.props.isFetchingData}
          onClassClick={this.props.onClassClick} onLogout={this.props.onLogout}
          onRefresh={this.onRefresh}
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
    events: state.todo.events,
    currentClass: state.todo.currentClass,
    isFetchingData: state.todo.fetchingEventData || state.todo.fetchingClassData
  }),
  dispatch => ({
    onLogout: () => {
      dispatch(logoutAndRedirect());
    },
    onRefresh: (token) => {
      dispatch(getEventClassData(token));
      dispatch(getEventData(token));
    },
    getClasses: (token) => {
      dispatch(getEventClassData(token));
    },
    getEvents: (token) => {
      dispatch(getEventData(token));
    },
    onClassClick: (id) => {
      dispatch(selectEventClass(id));
    }
  })
)(DashboardView);
