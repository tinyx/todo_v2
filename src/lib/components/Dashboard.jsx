import React from 'react';
import TopBar from './TopBar'


const style = {

};

const Dashboard = React.createClass({
  propTypes: {
    onLogout: React.PropTypes.func.isRequired
  },
  render() {
    return (
      <div>
        <TopBar onLogout={this.props.onLogout}/>
      </div>
  )}
})

export default Dashboard;
