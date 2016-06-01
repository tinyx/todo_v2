import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import Dashboard from '../lib/components/Dashboard';
import { logoutAndRedirect } from '../lib/actions/authentication';
import {
  getEventClassData,
  postEventClassData,
  putEventClassData,
  deleteEventClassData,
  selectEventClass,
  getEventData,
  postEventData,
  putEventData,
  deleteEventData
} from '../lib/actions/todo';


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
  onNewClass(newClassName) {
    this.props.onNewClass(this.props.token, newClassName);
  },
  onEditClass(classId, className) {
    this.props.onEditClass(this.props.token, classId, className);
  },
  onDeleteClass(classId) {
    this.props.onDeleteClass(this.props.token, classId);
  },
  onNewEvent() {

  },
  onEditEvent(eventId, eventData) {
    this.props.onEditEvent(this.props.token, eventId, eventData);
  },
  onDeleteEvent(eventId) {
    this.props.onDeleteEvent(this.props.token, eventId);
  },
  render() {
    let events = this.props.events.filter(e => e.eventclass === this.props.currentClass);
    return (
      <div>
        <Dashboard classes={this.props.classes} currentClass={this.props.currentClass}
          events={events} isFetchingData={this.props.isFetchingData}
          onClassClick={this.props.onClassClick} onNewClass={this.onNewClass}
          onEditClass={this.onEditClass} onDeleteClass={this.onDeleteClass}
          onNewEvent={this.onNewEvent} onEditEvent={this.onEditEvent}
          onDeleteEvent={this.onDeleteEvent}
          onLogout={this.props.onLogout} onRefresh={this.onRefresh}
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
    onClassClick: (id) => {
      dispatch(selectEventClass(id));
    },
    onNewClass: (token, newClassName) => {
      dispatch(postEventClassData(token, {
        name: newClassName
      }));
    },
    onEditClass: (token, classId, className) => {
      dispatch(putEventClassData(token, classId, {
        name: className
      }));
    },
    onDeleteClass: (token, classId) => {
      dispatch(deleteEventClassData(token, classId));
    },
    getEvents: (token) => {
      dispatch(getEventData(token));
    },
    onNewEvent: () => {},
    onEditEvent: (token, eventId, eventData) => {
      dispatch(putEventData(token, eventId, eventData));
    },
    onDeleteEvent: (token, eventId) => {
      dispatch(deleteEventData(token, eventId));
    }
  })
)(DashboardView);
