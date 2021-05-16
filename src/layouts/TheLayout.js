import React from 'react';
import { TheContent, TheSidebar, TheFooter, TheHeader } from './index';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const TheLayout = (props) => {
  const token = useSelector((state) => state.user.token);
  if (!token) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    );
  }
  return (
    <div className="c-app c-default-layout">
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent {...props} />
        </div>
        {/* <TheFooter /> */}
      </div>
    </div>
  );
};

export default TheLayout;
