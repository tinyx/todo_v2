import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

const ClassNav = () => (
  <LeftNav
    style={{
      marginTop: '40px'
    }}
  >
    <div
      style={{
        cursor: 'pointer',
        fontSize: '24px',
        color: 'rgba(255, 255, 255, 1)',
        lineHeight: '64px',
        fontWeight: '300',
        backgroundColor: '#00bcd4',
        paddingLeft: '24px',
        marginBottom: '8px'
      }}
    >
      Todo List v2
    </div>
    <MenuItem>Class 1</MenuItem>
    <MenuItem>Class 2</MenuItem>
  </LeftNav>
);

export default ClassNav;
