import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import DashBoard from 'material-ui/lib/svg-icons/action/dashboard';
import NoteAdd from 'material-ui/lib/svg-icons/action/note-add';
import TextField from 'material-ui/lib/text-field';

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
    addClassLabel: {
      cursor: 'default'
    },
    addClassTextField: {
      width: '160px',
      paddingLeft: '30px'
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
        <Divider style={{marginTop: '10px'}}/>
        <ListItem 
          primaryText="Add Class" 
          leftIcon={<NoteAdd />} 
          disabled={true}
          style={this.styles.addClassLabel}
        />
        <ListItem 
          primaryText="Class Name" 
          disabled={true}
          secondaryText={[
            <TextField 
              hintText="Input Class Name"
              style={this.styles.addClassTextField}
             />             
          ]}
        />
      </LeftNav>
    )
  }
});

export default ClassNav;
