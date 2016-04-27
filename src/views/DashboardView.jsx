import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import Dashboard from '../lib/components/Dashboard';

const DashboardView = React.createClass({
  render() {
    return (
      <div>
        <Dashboard/>
      </div>
    );
  }
});

export default DashboardView;