import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const EventTable = React.createClass({
  styles: {
    
  },
  propTypes: {
    events: React.PropTypes.array.isRequired
  },
  render() {
    return (
      <Table style={this.props.style}>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Todo Event</TableHeaderColumn>
            <TableHeaderColumn>Priority</TableHeaderColumn>
            <TableHeaderColumn>Due Date</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.props.events.map(e => (
            <TableRow key={e.id}>
              <TableRowColumn>{e.content}</TableRowColumn>
              <TableRowColumn>{e.priority}</TableRowColumn>
              <TableRowColumn>{e.duedate}</TableRowColumn>
              <TableRowColumn>{e.done === true ? 'Done' : 'In progress'}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
});

export default EventTable;