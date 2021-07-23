import CIcon from '@coreui/icons-react';
import { CHeader, CHeaderBrand, CHeaderNav, CToggler } from '@coreui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/scss/header.scss';

const TheHeader = ({ history, location, match }) => {
  console.log({ match, location, history });
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

      <CHeaderNav className="d-md-down-none mr-auto"></CHeaderNav>

      <CHeaderNav className="px-3">
        {location?.pathname === '/merchant' ? (
          <Link to="/merchant/create" className="btn btn-facebook btn-brand">
            Thêm doanh nghiệp
          </Link>
        ) : null}
      </CHeaderNav>
    </CHeader>
  );
};

export default TheHeader;
