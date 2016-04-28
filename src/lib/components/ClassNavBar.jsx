import React from 'react';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { List, ListItem, MakeSelectable } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import DashBoard from 'material-ui/svg-icons/action/dashboard';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


let SelectableList = MakeSelectable(List);

function wrapState(ComposedComponent) {
  return React.createClass({
    propTypes: {
      children: React.PropTypes.node.isRequired,
      defaultValue: React.PropTypes.number.isRequired,
    },
    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    },
    handleRequestChange(event, index) {
      this.setState({
        selectedIndex: index,
      });
    },
    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  })
}

SelectableList = wrapState(SelectableList);

var ClassNavBar = React.createClass({
  propTypes: {
    classes: React.PropTypes.array.isRequired,
    currentClass: React.PropTypes.number.isRequired,
    onClassClick: React.PropTypes.func.isRequired
  },
  styles: {
    placeholder: {
      height: '65px'
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
  render: function() {
    var selectedClassId = this.props.currentClass;
    var classes = this.props.classes;
    var value = 0;
    if(selectedClassId !== null && classes.length > 0) {
      for(var i=0; i<classes.length; i++) {
        if(classes[i].id === selectedClassId) {
          value = i;
          break;
        }
      }
    }
    return (
      <Drawer>
        <div style={this.styles.placeholder}>
        </div>
        <ListItem 
          primaryText="Classes" 
          leftIcon={<DashBoard />} 
          disabled={true}
          style={this.styles.classesLabel}
        />
        <Divider style={{marginBottom: '10px'}}/>
        <SelectableList defaultValue={1}
          value={value}>
          {this.props.classes.map(c => (
            <ListItem
              key={c.id}
              value={c.id}
              primaryText={c.name}
              onClick={() => this.props.onClassClick(c.id)}
            ></ListItem>
          ))}
        </SelectableList>
        <FloatingActionButton mini={true} secondary={true} style={this.styles.addClassButton}>
          <ContentAdd />
        </FloatingActionButton>
      </Drawer>
    )
  }
});

export default ClassNavBar;
