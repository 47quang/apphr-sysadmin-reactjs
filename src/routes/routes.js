import React from 'react';

const Dashboard = React.lazy(() => import('@Page/dashboard/Dashboard'));
const Merchant = React.lazy(() => import('@Page/merchant/Merchant'));
const CreateMerchant = React.lazy(() => import('@Page/merchant/CreateMerchant'));
const DetailMerchant = React.lazy(() => import('@Page/merchant/DetailMerchant'));
const Notification = React.lazy(() => import('@Page/notification/Notification'));
const Package = React.lazy(() => import('@Page/package/Package'));
const Mail = React.lazy(() => import('@Page/mail/Mail'));


const routes = [
  { path: '/', exact: true, component: Dashboard },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/merchant/create', name: 'CreateMerchant', component: CreateMerchant },
  { path: '/merchant/:id', name: 'DetailMerchant', component: DetailMerchant },
  { path: '/merchant', name: 'Merchant', component: Merchant },
  { path: '/notification', name: 'Notification', component: Notification },
  { path: '/package', name: 'Package', component: Package },
  { path: '/mail', name: 'Mail', component: Mail },
];

export default routes;
