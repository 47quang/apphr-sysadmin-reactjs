import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CBreadcrumbRouter,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import routes from '@Route/routes';
import '../styles/scss/header.scss';

import {
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks,
} from './index';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'vi', name: 'Vietnam' },
];

const TheHeader = () => {
  const { i18n } = useTranslation();
  const style = useSelector((state) => state.style);
  const dispatch = useDispatch();
  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(style.sidebarShow)
      ? false
      : 'responsive';
    dispatch({
      type: 'CHANGE_SIDEBAR_VISIBILITY',
      payload: { sidebarShow: val },
    });
  };

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(style.sidebarShow)
      ? true
      : 'responsive';
    dispatch({
      type: 'CHANGE_SIDEBAR_VISIBILITY',
      payload: {
        sidebarShow: val,
      },
    });
  };

  function changeLanguage(language) {
    dispatch({
      type: 'CHANGE_LANGUAGE',
      payload: {
        language,
      },
    });
    i18n.changeLanguage(language);
  }

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        header
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
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
        />
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <div className="lang">
          <div className={style.language}></div>
          <ul className="dropdown">
            {languages.map((language, index) => {
              if (language.code != style.language) {
                return (
                  <li key={index}>
                    <div
                      onClick={() => changeLanguage(language.code)}
                      className={language.code}
                    ></div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <TheHeaderDropdownNotif />
        <TheHeaderDropdownTasks />
        <TheHeaderDropdownMssg />
        <TheHeaderDropdown />
      </CHeaderNav>
    </CHeader>
  );
};

export default TheHeader;
