import React from 'react';
import TopBar from './TopBar';
import ClassNavBar from './ClassNavBar';


const Dashboard = React.createClass({
  propTypes: {
    onLogout: React.PropTypes.func.isRequired,
    classes: React.PropTypes.array.isRequired,
    onClassClick: React.PropTypes.func.isRequired
  },
  render() {
    return (
      <div>
        <TopBar onLogout={this.props.onLogout}/>
        <ClassNavBar classes={this.props.classes}
          currentClass={1} onClassClick={this.props.onClassClick}/>
      </div>
  )}
});

export default Dashboard;
