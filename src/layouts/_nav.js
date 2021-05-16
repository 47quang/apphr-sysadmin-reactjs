import React from 'react';
import CIcon from '@coreui/icons-react';

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/sysadmin/dashboard',
    icon: 'cil-speedometer',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Package',
    to: '/sysadmin/package',
    icon: 'cil-touch-app',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Merchant',
    to: '/sysadmin/merchant',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Mail',
    to: '/sysadmin/mail',
    icon: 'cil-bell',
  },
];

export default _nav;
