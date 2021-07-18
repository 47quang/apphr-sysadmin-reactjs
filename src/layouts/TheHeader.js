import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CToggler
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import '../styles/scss/header.scss';

import {
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks,
  TheHeaderDropdown
} from './index';

const TheHeader = () => {
  const sidebarShow = useSelector(state => state.style.sidebarShow);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow)
    ? false
    : 'responsive';
    dispatch({ type: 'CHANGE_SIDEBARSHOW', payload: { sidebarShow: val } });
  };
  
  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow)
      ? true
      : 'responsive';
    dispatch({ type: 'CHANGE_SIDEBARSHOW', payload: { sidebarShow: val } });
  };

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo" />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <TheHeaderDropdownNotif />
        <TheHeaderDropdownMssg />
        <TheHeaderDropdownTasks />
        <TheHeaderDropdown/>
      </CHeaderNav>
    </CHeader>
  );
};

export default TheHeader;
