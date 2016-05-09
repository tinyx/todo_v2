import React from 'react';
import TopBar from './TopBar';
import ClassNavBar from './ClassNavBar';
import EventTable from './EventTable';
import LinearProgress from 'material-ui/LinearProgress';
import Snackbar from 'material-ui/Snackbar';


const Dashboard = React.createClass({
  getInitialState() {
    return {
      aboutOpen: false,
    };
  },
  propTypes: {
    onLogout: React.PropTypes.func,
    onRefresh: React.PropTypes.func,
    onAbout: React.PropTypes.func,
    classes: React.PropTypes.array.isRequired,
    events: React.PropTypes.array.isRequired,
    onClassClick: React.PropTypes.func,
    onNewClass: React.PropTypes.func,
    isFetchingData: React.PropTypes.bool,
  },
  styles: {
    linearProgress: {
      zIndex: '1400',
      marginTop: '-4px'
    },
    eventTable: {
      marginLeft: '270px',
      marginTop: '15px',
      width: 'calc(100% - 270px)'
    }
  },
  handleAboutOn() {
    this.setState({
      aboutOpen: true,
    });
  },
  handleAboutOff() {
    this.setState({
      aboutOpen: false,
    });
  },
  render() {
    return (
      <div>
        <TopBar onLogout={this.props.onLogout} onRefresh={this.props.onRefresh} onAbout={this.handleAboutOn}/>
        {this.props.isFetchingData === true ?
          (<LinearProgress style={this.styles.linearProgress} mode="indeterminate" />) : null
        }
        <ClassNavBar classes={this.props.classes} onClassClick={this.props.onClassClick}
          onNewClass={this.props.onNewClass} currentClass={this.props.currentClass}/>
        <EventTable events={this.props.events} style={this.styles.eventTable}/>
        <Snackbar
          open={this.state.aboutOpen}
          message="Todo v2.0, powered by modern frontend technologies"
          autoHideDuration={4000}
          onRequestClose={this.handleAboutOff}
        />
      </div>
  )}
});

export default Dashboard;
