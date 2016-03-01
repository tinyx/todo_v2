import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import DashBoard from 'material-ui/lib/svg-icons/action/dashboard';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

var ClassNav = React.createClass({
  propTypes: {
    classNames: React.PropTypes.array.isRequired
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
      classNames: this.props.classNames
    });
  },
  
  handelChangeClassNames: function(classNames) {
    this.setState({
      classNames: classNames
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
        {this.state.classNames.map((className) => (
          <MenuItem
            key={className}
            value={className}
            primaryText={className}
          ></MenuItem>
        ))}
        <FloatingActionButton mini={true} secondary={true} style={this.styles.addClassButton}>
          <ContentAdd />
        </FloatingActionButton>
      </LeftNav>
    )
  }
});

export default ClassNav;
