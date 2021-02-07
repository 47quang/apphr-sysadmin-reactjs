import React from 'react';

const Dashboard = React.lazy(() => import('@Page/dashboard/Dashboard'));
const Account = React.lazy(() => import('@Page/account/Account'));
const Notification = React.lazy(() => import('@Page/notification/Notification'));
const Package = React.lazy(() => import('@Page/package/Package'));
const Mail = React.lazy(() => import('@Page/mail/Mail'));
// const Page404 = React.lazy(() => import('@Page/page404/Page404'));


const routes = [
  { path: '/', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/account', name: 'Account', component: Account },
  { path: '/notification', name: 'Notification', component: Notification },
  { path: '/package', name: 'Package', component: Package },
  { path: '/mail', name: 'Mail', component: Mail },
  // { path: '/*', name: 'Page404', component: Page404 },
];

export default routes;
