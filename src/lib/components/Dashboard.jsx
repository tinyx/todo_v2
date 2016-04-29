import React from 'react';
import TopBar from './TopBar';
import ClassNavBar from './ClassNavBar';
import EventTable from './EventTable';
import LinearProgress from 'material-ui/LinearProgress';


const Dashboard = React.createClass({
  propTypes: {
    onLogout: React.PropTypes.func.isRequired,
    classes: React.PropTypes.array.isRequired,
    events: React.PropTypes.array.isRequired,
    onClassClick: React.PropTypes.func.isRequired,
    isFetchingData: React.PropTypes.bool,
  },
  styles: {
    linearProgress: {
      zIndex: '1400'
    },
    eventTable: {
      marginLeft: '270px',
      marginTop: '15px'
    }
  },
  render() {
    return (
      <div>
        <TopBar onLogout={this.props.onLogout}/>
        {this.props.isFetchingData === true ?
          (<LinearProgress style={this.styles.linearProgress} mode="indeterminate" />) : null
        }
        <ClassNavBar classes={this.props.classes} onClassClick={this.props.onClassClick}
          currentClass={this.props.currentClass}/>
        <EventTable events={this.props.events} style={this.styles.eventTable}/>
      </div>
  )}
});

export default Dashboard;
