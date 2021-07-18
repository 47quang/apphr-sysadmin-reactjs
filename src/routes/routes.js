import React from 'react';

const Dashboard = React.lazy(() => import('@Page/dashboard/Dashboard'));
const Merchant = React.lazy(() => import('@Page/merchant/Merchant'));
const CreateMerchant = React.lazy(() => import('@Page/merchant/CreateMerchant'));
const DetailMerchant = React.lazy(() => import('@Page/merchant/DetailMerchant'));
const Notification = React.lazy(() => import('@Page/notification/Notification'));
const Package = React.lazy(() => import('@Page/package/Package'));
const Mail = React.lazy(() => import('@Page/mail/Mail'));


const routes = [
  { path: '/sysadmin/', exact: true, component: Dashboard },
  { path: '/sysadmin/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/sysadmin/merchant/create', name: 'CreateMerchant', component: CreateMerchant },
  { path: '/sysadmin/merchant/:id', name: 'DetailMerchant', component: DetailMerchant },
  { path: '/sysadmin/merchant', name: 'Merchant', component: Merchant },
  { path: '/sysadmin/notification', name: 'Notification', component: Notification },
  { path: '/sysadmin/package', name: 'Package', component: Package },
  { path: '/sysadmin/mail', name: 'Mail', component: Mail },
];

export default routes;
