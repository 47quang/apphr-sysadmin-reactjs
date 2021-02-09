import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CBreadcrumbRouter,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import routes from '@Route/routes';
import '../styles/scss/header.scss';

import {
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
  const language = useSelector((state) => state.style.language);
  const dispatch = useDispatch();

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
          <div className={language}></div>
          <ul className="dropdown">
            {languages.map((lng, index) => {
              if (lng.code != language) {
                return (
                  <li key={index}>
                    <div
                      onClick={() => changeLanguage(lng.code)}
                      className={lng.code}
                    ></div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <TheHeaderDropdownNotif />
        <TheHeaderDropdownMssg />
        <TheHeaderDropdownTasks />
      </CHeaderNav>
    </CHeader>
  );
};

export default TheHeader;
