import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const EventTable = React.createClass({
  styles: {
    headers: {
      todoEvent: {
        width: '60%'
      },
      priority: {
        width: '10%'
      },
      dueDate: {
        width: '10%'
      },
      status: {
        width: '10%'
      },
      editIcon: {
        width: '10%'
      }
    },
    columns: {
      todoEvent: {
        width: '60%'
      },
      priority: {
        width: '10%'
      },
      dueDate: {
        width: '10%'
      },
      status: {
        width: '10%'
      },
      editIcon: {
        width: '10%'
      }
    }
  },
  propTypes: {
    events: React.PropTypes.array.isRequired
  },
  render() {
    return (
      <Table style={this.props.style}>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn style={this.styles.headers.todoEvent}>Todo Event</TableHeaderColumn>
            <TableHeaderColumn style={this.styles.headers.priority}>Priority</TableHeaderColumn>
            <TableHeaderColumn style={this.styles.headers.dueDate}>Due Date</TableHeaderColumn>
            <TableHeaderColumn style={this.styles.headers.status}>Status</TableHeaderColumn>
            <TableHeaderColumn style={this.styles.headers.editIcon}>Edit</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.props.events.map(e => (
            <TableRow key={e.id}>
              <TableRowColumn style={this.styles.columns.todoEvent}>{e.content}</TableRowColumn>
              <TableRowColumn style={this.styles.columns.priority}>{e.priority}</TableRowColumn>
              <TableRowColumn style={this.styles.columns.dueDate}>{e.duedate}</TableRowColumn>
              <TableRowColumn style={this.styles.columns.status}>{e.done === true ? 'Done' : 'In progress'}</TableRowColumn>
              <TableRowColumn style={this.styles.columns.editIcon}></TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
});

export default EventTable;
