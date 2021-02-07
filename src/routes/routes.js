import React from 'react';

const Dashboard = React.lazy(() => import('@Page/dashboard/Dashboard'));
const Course = React.lazy(() => import('@Page/course/Course'));
const Account = React.lazy(() => import('@Page/account/Account'));
const Profile = React.lazy(() => import('@Page/profile/Profile'));
const Proposal = React.lazy(() => import('@Page/proposal/Proposal'));
const RollUp = React.lazy(() => import('@Page/roll-up/RollUp'));
const Notification = React.lazy(() => import('@Page/notification/Notification'));
const Report = React.lazy(() => import('@Page/report/Report'));
const General = React.lazy(() => import('@Page/setting/general/General'));
const Position = React.lazy(() => import('@Page/setting/position/Position'));
const Shift = React.lazy(() => import('@Page/setting/shift/Shift'));
const Department = React.lazy(() => import('@Page/setting/department/Department'));
const Branch = React.lazy(() => import('@Page/setting/branch/Branch'));
const Permission = React.lazy(() => import('@Page/setting/authorization/permission/Permission'));
const PermissionGroup = React.lazy(() => import('@Page/setting/authorization/permission-group/PermissionGroup'));
const Role = React.lazy(() => import('@Page/setting/authorization/role/Role'));


const routes = [
  { path: '/', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/course', name: 'Course', component: Course },
  { path: '/account', name: 'Account', component: Account },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/proposal', name: 'Proposal', component: Proposal },
  { path: '/roll-up', name: 'RollUp', component: RollUp },
  { path: '/notification', name: 'Notification', component: Notification },
  { path: '/report', name: 'Report', component: Report },
  { path: '/setting', exact: true, name: 'General', component: General },
  { path: '/setting/general', name: 'General', component: General },
  { path: '/setting/position', name: 'Position', component: Position },
  { path: '/setting/shift', name: 'Shift', component: Shift },
  { path: '/setting/branch', name: 'Branch', component: Branch },
  { path: '/setting/department', name: 'Department', component: Department },
  { path: '/setting/authorization', exact: true, name: 'Permission', component: Permission },
  { path: '/setting/authorization/permission', name: 'Permission', component: Permission },
  { path: '/setting/authorization/permission-group', name: 'PermissionGroup', component: PermissionGroup },
  { path: '/setting/authorization/role', name: 'Role', component: Role },
];

export default routes;
