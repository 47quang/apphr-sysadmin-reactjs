import React from 'react';
import { ShellBar, ShellBarItem } from '@ui5/webcomponents-react';

function QHeaderTable(props) {
  const { t, actions } = props;

  return (
    <ShellBar>
      {actions &&
        actions.map((action, index) => (
          <ShellBarItem
            key={index}
            showCoPilot
            showNotifications
            showProductSwitch
            {...action}
          />
        ))}
    </ShellBar>
  );
}

export default QHeaderTable;
