import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import CIcon from '@coreui/icons-react';
import nav from './_nav';
import { useTranslation } from 'react-i18next';

const TheSidebar = () => {
  const navigation = JSON.parse(JSON.stringify(nav));
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const sidebarShow = useSelector((state) => state.style.sidebarShow);

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
    <CSidebar
      show={sidebarShow}
      onShowChange={(val) =>
        dispatch({
          type: 'CHANGE_SIDEBAR_VISIBILITY',
          payload: { sidebarShow: val },
        })
      }
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation.map(i => {
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
