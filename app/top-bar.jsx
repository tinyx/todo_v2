import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

const TopBar = () => (
  <AppBar 
    title="Todo List v2"
    style={{
      zIndex: '10000'
    }}
    />
);

export default TopBar;
