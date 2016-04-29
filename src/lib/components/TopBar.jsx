import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';


const TopBar = React.createClass({
  propTypes: {
    onLogout: React.PropTypes.func.isRequired
  },
  styles: {
    topBar: {
      zIndex: '1400'
    }
  },
  render() {
    return (
      <AppBar
        title="Todo List v2"
        showMenuIconButton={false}
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="About" />
            <MenuItem primaryText="Log out" onTouchTap={this.props.onLogout} />
          </IconMenu>
        }
        style={this.styles.topBar}
        />
      )
  }
});

export default TopBar;
