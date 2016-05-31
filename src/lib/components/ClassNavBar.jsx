import React from 'react';
import Drawer from 'material-ui/Drawer';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { List, ListItem, MakeSelectable } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import DashBoard from 'material-ui/svg-icons/action/dashboard';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import {grey400} from 'material-ui/styles/colors';


function wrapState(ComposedComponent) {
  return React.createClass({
    propTypes: {
      children: React.PropTypes.node.isRequired,
      selectedIndex: React.PropTypes.number,
    },
    render() {
      return (
        <ComposedComponent
          value={this.props.selectedIndex}
          onChange={x => {}}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  })
}

let SelectableList = MakeSelectable(List);
SelectableList = wrapState(SelectableList);

var ClassNavBar = React.createClass({
  propTypes: {
    classes: React.PropTypes.array,
    onClassClick: React.PropTypes.func,
    onNewClass: React.PropTypes.func,
    onEditClass: React.PropTypes.func,
    onDeleteClass: React.PropTypes.func
  },
  styles: {
    placeholder: {
      height: '65px'
    },
    divider: {
      marginBottom: '10px'
    },
    iconStyles: {
      marginRight: '10px',
      paddingLeft: '15px',
      fill: '#00bcd4'
    },
    classesLabel: {
      cursor: 'default'
    },
    addClassGroup: {
      position: 'absolute',
      width: '90%',
      left: '20px',
      bottom: '20px'
    },
    addClassTextField: {
      width: '75%'
    },
    addClassButton: {
      position: 'absolute',
      bottom: '5px',
      right: '5px'
    },
    editClassDialog: {
      width: '40%',
      margin: 'auto'
    },
    editClassTextField: {
      display: 'block'
    }
  },
  componentWillMount() {
    this.setState({
      newClassName: '',
      editDialogOpen: false,
      editingEventClassId: '',
      editingEventClassName: '',
      deleteDialogOpen: false,
      deletingEventClassId: ''
    });
  },
  onNewClassNameChange(e) {
    this.setState({ newClassName: e.target.value });
  },
  onNewClass() {
    this.props.onNewClass(this.state.newClassName);
    this.setState({newClassName: ''});
  },
  onNewClassKeyDown(e) {
    if(e.which === 13) {
      this.onNewClass();
    }
  },
  onEditClass(eventClassId, eventClassName) {
    this.setState({
      editDialogOpen: true,
      editingEventClassId: eventClassId,
      editingEventClassName: eventClassName
    })
  },
  onEditClassNameChange(e) {
    this.setState({ editingEventClassName: e.target.value });
  },
  onCloseEditClass() {
    this.setState({
      editDialogOpen: false,
      editingEventClassId: '',
      editingEventClassName: ''
    })
  },
  onSaveEditClass() {
    this.props.onEditClass(this.state.editingEventClassId, this.state.editingEventClassName);
    this.onCloseEditClass();
  },
  onDeleteClass(eventClassId) {
    this.setState({
      deleteDialogOpen: true,
      deletingEventClassId: eventClassId
    })
  },
  onCloseDeleteClass() {
    this.setState({
      deleteDialogOpen: false,
      deletingEventClassId: ''
    })
  },
  onConfirmDeleteClass() {
    this.props.onDeleteClass(this.state.deletingEventClassId);
    this.onCloseDeleteClass();
  },
  render: function() {
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
        <Divider style={this.styles.divider}/>
        <SelectableList
          selectedIndex={this.props.currentClass}>
          {this.props.classes.map(c => (
            <ListItem
              className='event-class-item'
              key={c.id}
              value={c.id}
              primaryText={c.name}
              onTouchTap={() => this.props.onClassClick(c.id)}
              rightIconButton={(
                <IconMenu
                  className='event-class-item-icon'
                  iconButtonElement={(
                      <IconButton touch={true}>
                        <MoreVertIcon/>
                      </IconButton>)}>
                  <MenuItem
                    onTouchTap={() => this.onEditClass(c.id, c.name)}
                    >Edit</MenuItem>
                  <MenuItem
                    onTouchTap={() => this.onDeleteClass(c.id)}
                    >Delete</MenuItem>
                </IconMenu>
              )}
              ></ListItem>))}
        </SelectableList>
        <div style={this.styles.addClassGroup}>
          <TextField hintText="Add New Class" style={this.styles.addClassTextField}
            onChange={this.onNewClassNameChange} value={this.state.newClassName}
            onKeyDown={this.onNewClassKeyDown}
            />
          <FloatingActionButton mini={true} primary={true}
            style={this.styles.addClassButton} onMouseDown={this.onNewClass}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
        <div>
          <Dialog
            title="Edit Event Class"
            open={this.state.editDialogOpen}
            contentStyle={this.styles.editClassDialog}
            onRequestClose={this.onCloseEditClass}
            actions={[
              <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.onCloseEditClass}
              />,
              <FlatButton
                label="Save"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.onSaveEditClass}
              />,
            ]}
          >
            Edit the name of the event class.
            <TextField
              hintText="Event Class Name"
              style={this.styles.editClassTextField}
              defaultValue={this.state.editingEventClassName}
              onChange={this.onEditClassNameChange}
              />
          </Dialog>
        </div>
        <div>
          <Dialog
            title="Delete Event Class"
            open={this.state.deleteDialogOpen}
            contentStyle={this.styles.editClassDialog}
            onRequestClose={this.onCloseDeleteClass}
            actions={[
              <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.onCloseDeleteClass}
              />,
              <FlatButton
                label="Confirm"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.onConfirmDeleteClass}
              />,
            ]}
          >
            Are you sure you want to delete this event class?
            You will lose all the events under this class too.
          </Dialog>
        </div>
      </Drawer>
    )
  }
});

export default ClassNavBar;
