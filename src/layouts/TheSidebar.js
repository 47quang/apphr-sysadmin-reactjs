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
  CSidebarNavItem,
} from '@coreui/react';
import nav from './_nav';
import { useTranslation } from 'react-i18next';

const TheSidebar = () => {
  const navigation = JSON.parse(JSON.stringify(nav));
  const { t } = useTranslation();

  function changeName(tree) {
    if (tree.name) {
      tree.name = t(tree.name);
    }
    if (tree._children) {
      for (const child of tree._children) {
        changeName(child);
      }
    }
  }
  return (
    <CSidebar>
      <CSidebarBrand className="d-md-down-none" to="/">
        <img
          src="/public/images/sysadmin_logo.png"
          alt=""
          style={{ height: '35px' }}
        />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation.map((i) => {
            changeName(i);
            return i;
          })}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
