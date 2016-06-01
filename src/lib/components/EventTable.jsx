import dateFormat from 'dateformat';
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ActionDone from 'material-ui/svg-icons/action/done';
import ContentClear from 'material-ui/svg-icons/content/clear';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';

const EventTableRow = React.createClass({
  propTypes: {
    event: React.PropTypes.object.isRequired,
    onEditEvent: React.PropTypes.func,
    onDeleteEvent: React.PropTypes.func
  },
  styles: {
    columns: {
      content: {
        width: '60%'
      },
      dueDate: {
        width: '15%'
      },
      status: {
        width: '10%',
        textAlign: 'center'
      },
      editIcon: {
        width: '8%'
      }
    },
    editingButtons: {
      marginLeft: '-15px'
    },
    editingButton: {
      width: 'auto',
      height: 'auto',
      padding: '3px'
    },
    contentTextField: {
      fontSize: '13px',
      marginTop: '-1px'
    },
    duedateDatePicker: {
      fontSize: '13px',
      marginTop: '-1px'
    },
    eventDoneToggle: {
    },
    deletingDialog: {
      width: '40%',
      margin: 'auto'
    }
  },
  componentWillMount() {
    this.setState({
      editing: false,
      deletingDialogOpen: false,
      content: this.props.event.content,
      duedate: this.props.event.duedate,
      done: this.props.event.done
    });
  },
  onEditEvent() {
    this.setState({
      editing: true
    });
  },
  onDeleteEvent() {
    this.setState({
      deletingDialogOpen: true
    });
  },
  onCloseDeleteEvent() {
    this.setState({
      deletingDialogOpen: false
    })
  },
  onSaveEvent() {
    this.setState({
      editing: false
    });
    this.props.onEditEvent(this.props.event.id, {
      eventclass: this.props.event.eventclass,
      content: this.state.content,
      duedate: this.state.duedate,
      done: this.state.done
    });
  },
  onConfirmDeleteEvent() {
    this.onCloseDeleteEvent();
    this.props.onDeleteEvent(this.props.event.id);
  },
  onCancelEditing() {
    this.setState({
      editing: false,
      content: this.props.event.content,
      duedate: this.props.event.duedate,
      done: this.props.event.done
    });
  },
  onUpdatingContent(e) {
    this.setState({
      content: e.target.value
    });
  },
  onUpdatingDueDate(e, newDate) {
    this.setState({
      duedate: dateFormat(new Date(newDate), 'yyyy-mm-dd')
    });
  },
  onUpdatingDone(e, toggled) {
    this.setState({
      done: toggled
    });
  },
  render() {
    return (
      <TableRow className='event-item'>
        <TableRowColumn style={this.styles.columns.content}>
          {
            this.state.editing === true ?
            <TextField name='event-content-textfield' style={this.styles.contentTextField}
              defaultValue={this.props.event.content} onChange={this.onUpdatingContent} fullWidth={true}>
            </TextField> :
            this.props.event.content
          }
        </TableRowColumn>
        <TableRowColumn style={this.styles.columns.dueDate}>
          {
            this.state.editing === true ?
            <DatePicker name='event-duedate-datepicker' textFieldStyle={this.styles.duedateDatePicker}
              defaultDate={new Date(this.props.event.duedate)} mode="landscape" onChange={this.onUpdatingDueDate}
              /> :
            dateFormat(new Date(this.props.event.duedate), 'yyyy-mm-dd')
          }
        </TableRowColumn>
        <TableRowColumn style={this.styles.columns.status}>
          {
            this.state.editing === true ?
              <Toggle
                disabled={!this.state.editing} defaultToggled={this.props.event.done}
                style={this.styles.eventDoneToggle} onToggle={this.onUpdatingDone}
              /> :
            (this.props.event.done === true ? 'Yes' : 'No')
          }

        </TableRowColumn>
        <TableRowColumn style={this.styles.columns.editIcon}>
          {this.state.editing === true ?
            <div style={this.styles.editingButtons}>
              <IconButton
                style={this.styles.editingButton} mini={true}
                onTouchTap={this.onSaveEvent}>
                <ActionDone/>
              </IconButton>
              <IconButton
                style={this.styles.editingButton} mini={true}
                onTouchTap={this.onCancelEditing}
              >
                <ContentClear/>
              </IconButton>
            </div>:
            <IconMenu
              className='event-item-icon'
              iconButtonElement={(
                  <IconButton touch={true}>
                    <MoreVertIcon/>
                  </IconButton>)}>
              <MenuItem onTouchTap={this.onEditEvent}>Edit</MenuItem>
              <MenuItem onTouchTap={this.onDeleteEvent}>Delete</MenuItem>
            </IconMenu>
          }
        </TableRowColumn>
        <Dialog
            title="Delete Event"
            open={this.state.deletingDialogOpen}
            contentStyle={this.styles.deletingDialog}
            onRequestClose={this.onCloseDeleteEvent}
            actions={[
              <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.onCloseDeleteEvent}
              />,
              <FlatButton
                label="Confirm"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.onConfirmDeleteEvent}
              />,
            ]}
          >
            Are you sure you want to delete this event?
          </Dialog>
      </TableRow>
    )
  }
});

const EventTable = React.createClass({
  styles: {
    headers: {
      content: {
        width: '60%'
      },
      dueDate: {
        width: '15%',
        paddingLeft: '30px'
      },
      status: {
        width: '10%',
        textAlign: 'center'
      },
      editIcon: {
        width: '8%'
      }
    }
  },
  propTypes: {
    events: React.PropTypes.array.isRequired,
    onEditEvent: React.PropTypes.func,
    onDeleteEvent: React.PropTypes.func
  },
  render() {
    return (
      <Table style={this.props.style} selectable={false}>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn style={this.styles.headers.content}>Todo Event</TableHeaderColumn>
            <TableHeaderColumn style={this.styles.headers.dueDate}>Due Date</TableHeaderColumn>
            <TableHeaderColumn style={this.styles.headers.status}>Finished</TableHeaderColumn>
            <TableHeaderColumn style={this.styles.headers.editIcon}></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.props.events.map(e => (
            <EventTableRow key={e.id} event={e}
              onEditEvent={this.props.onEditEvent} onDeleteEvent={this.props.onDeleteEvent}
              ></EventTableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
});

export default EventTable;
