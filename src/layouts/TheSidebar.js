import React from 'react';
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem
} from '@coreui/react';
import nav from './_nav';
import { useDispatch, useSelector } from 'react-redux';

const TheSidebar = () => {
  const navigation = JSON.parse(JSON.stringify(nav));

  const dispatch = useDispatch();
  const show = useSelector(state => state.style.sidebarShow);

  return (
    <CSidebar
      show={show}
      onShowChange={val => dispatch({ type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <img
          src="/public/images/sysadmin_logo.png"
          alt=""
          style={{ height: '35px' }}
        />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation.map(i => {
            // changeName(i);
            return i;
          })}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
