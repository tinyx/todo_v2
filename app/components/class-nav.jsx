import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import DashBoard from 'material-ui/lib/svg-icons/action/dashboard';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import { selectClass } from '../actions'

var ClassNav = React.createClass({
  propTypes: {
    classes: React.PropTypes.array.isRequired,
    onClassClick: React.PropTypes.func.isRequired
  },

  styles: {
    placeHolder: {
      cursor: 'pointer',
      fontSize: '24px',
      color: 'rgba(255, 255, 255, 1)',
      lineHeight: '56px',
      fontWeight: '300',
      backgroundColor: '#00bcd4',
      paddingLeft: '24px',
      marginBottom: '8px'
    },
    iconStyles: {
      marginRight: '10px',
      paddingLeft: '15px',
      fill: '#00bcd4'
    },
    classesLabel: {
      cursor: 'default'
    },
    addClassButton: {
      position: 'absolute',
      right: '20px',
      bottom: '20px'
    }
  },

  getInitialState: function() {
    return ({
      classes: this.props.classes
    });
  },
  
  handelChangeClassNames: function(classes) {
    this.setState({
      classes: classes
    })
  },

  render: function() {
    return (
      <LeftNav>
        <div style={this.styles.placeHolder}>
          Todo List v2
        </div>
        <ListItem 
          primaryText="Classes" 
          leftIcon={<DashBoard />} 
          disabled={true}
          style={this.styles.classesLabel}
        />
        <Divider style={{marginBottom: '10px'}}/>
        {this.state.classes.map(c => (
          <ListItem
            key={c.id}
            value={c.id}
            primaryText={c.text}
            onClick={() => this.props.onClassClick(c.id)}
          ></ListItem>
        ))}
        <FloatingActionButton mini={true} secondary={true} style={this.styles.addClassButton}>
          <ContentAdd />
        </FloatingActionButton>
      </LeftNav>
    )
  }
});

export default ClassNav;
