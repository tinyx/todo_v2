import React, {PropTypes} from 'react';
import { push } from 'react-router-redux'
import { connect } from 'react-redux';


const HomeView = React.createClass({
  propTypes: {
    isAuthenticated: PropTypes.bool.isRequired
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentDidMount() {
    if(this.props.isAuthenticated) {
      this.context.router.push('/dashboard');
    }
    else {
      this.context.router.push('/login');
    }
  },
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

export default connect(
  state => ({
    isAuthenticated: state.auth.isAuthenticated
  })
)(HomeView);