import React from 'react';
import TopBar from './TopBar';
import ClassNavBar from './ClassNavBar';


const Dashboard = React.createClass({
  propTypes: {
    onLogout: React.PropTypes.func.isRequired
  },
  render() {
    return (
      <div>
        <TopBar onLogout={this.props.onLogout}/>
        <ClassNavBar classes={[{'id': 1, 'text': 'Haha'}, {'id': 2, 'text': 'Hehe'}]}
          currentClass={1} onClassClick={() => true}/>
      </div>
  )}
});

export default Dashboard;
