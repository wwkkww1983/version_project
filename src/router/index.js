// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Main from '@/pages/main.vue';
// import Login from '@/pages/login.vue';
const Login = r => require.ensure([], () => r(require('@/pages/login.vue')), 'Login');

// import Alert from '@/pages/alert.vue';
// const Alert = r => require.ensure([], () => r(require('@/pages/alert.vue')), 'Alert');
const Error = r => require.ensure([], () => r(require('@/pages/error.vue')), 'Error');
const Echart = r => require.ensure([], () => r(require('@/pages/echartTest.vue')), 'Echart');
const AddSite = r => require.ensure([], () => r(require('@/pages/addSite.vue')), 'AddSite');
const AddDevice = r => require.ensure([], () => r(require('@/pages/addDevice.vue')), 'AddDevice');
const DeviceList = r => require.ensure([], () => r(require('@/pages/deviceList.vue')), 'DeviceList');
const AllDeviceList = r => require.ensure([], () => r(require('@/pages/allDeviceList.vue')), 'AllDeviceList');

const Test = r => require.ensure([], () => r(require('@/pages/deviceMap/test.vue')), 'Test');
const SiteList = r => require.ensure([], () => r(require('@/pages/SiteList.vue')), 'SiteList');
const DeviceLocMap = r => require.ensure([], () => r(require('@/pages/deviceMap/deviceLocMap.vue')), 'DeviceLocMap');
const DeviceTemper = r => require.ensure([], () => r(require('@/pages/temper/deviceTemper.vue')), 'DeviceTemper');
const DevicePa = r => require.ensure([], () => r(require('@/pages/devicePa/devicePa.vue')), 'DevicePa');
const RunStatus = r => require.ensure([], () => r(require('@/pages/deviceStatus/runStatus.vue')), 'RunStatus');
const DeviceDetail = r => require.ensure([], () => r(require('@/pages/deviceDetail/deviceDetail.vue')), 'DeviceDetail');
const WarnData = r => require.ensure([], () => r(require('@/pages/historyData/warnData.vue')), 'WarnData');
const ErrorData = r => require.ensure([], () => r(require('@/pages/historyData/errorData.vue')), 'ErrorData');
const DeviceHistoryVersion = r => require.ensure([], () => r(require('@/pages/historyData/deviceHistoryVersion.vue')), 'DeviceHistoryVersion');
const AllHistoryVersion = r => require.ensure([], () => r(require('@/pages/historyData/allHistoryVersion.vue')), 'AllHistoryVersion');
const TenantList = r => require.ensure([], () => r(require('@/pages/admin/tenantList.vue')), 'TenantList');
const UserList = r => require.ensure([], () => r(require('@/pages/admin/userList.vue')), 'UserList');
const UserTenantList = r => require.ensure([], () => r(require('@/pages/adminUser/userTenantList.vue')), 'UserTenantList');
const UserInfo = r => require.ensure([], () => r(require('@/pages/userInfo/userInfo.vue')), 'UserInfo');
const EventSource = r => require.ensure([], () => r(require('@/pages/eventSource/eventSource.vue')), 'EventSource');
const EthAlertList = r => require.ensure([], () => r(require('@/pages/historyData/ethAlertList.vue')), 'EthAlertList');


export const routers = [
  {path: "/login", component: Login},
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta: {label: '设备监管首页'},
    children: [{
      path: '/echart',
      name: 'echart',
      meta: {label: 'echart'},
      component: Echart,
    }, {
      path: '/addSite',
      name: 'addSite',
      meta: {label: '注册新站点'},
      component: AddSite,
    }, {
      path: '/addDevice',
      name: 'addDevice',
      meta: {label: '注册新设备'},
      component: AddDevice,
    }, {
      path: '/error',
      name: 'error',
      meta: {label: 'error'},
      component: Error,
    }, {
      path: '/deviceList',
      name: 'deviceList',
      meta: {label: '设备列表'},
      component: DeviceList,
    }, {
      path: '/allDeviceList',
      name: 'allDeviceList',
      meta: {label: '设备列表'},
      component: AllDeviceList,
    }, {
      path: '/siteList',
      name: 'siteList',
      meta: {label: '站点列表'},
      component: SiteList,
    }, {
      path: '/deviceLocMap',
      name: 'deviceLocMap',
      meta: {label: '地理位置监控'},
      component: DeviceLocMap,
    }, {
      path: '/deviceTemper',
      name: 'deviceTemper',
      meta: {label: '温度监控'},
      component: DeviceTemper,
    }, {
      path: '/devicePa',
      name: 'devicePa',
      meta: {label: '压力监控'},
      component: DevicePa,
    }, {
      path: '/runStatus',
      name: 'runStatus',
      meta: {label: '运行状态'},
      component: RunStatus,
    }, {
      path: '/deviceDetail',
      name: 'deviceDetail',
      meta: {label: '设备详情'},
      component: DeviceDetail,
    }, {
      path: '/warnData',
      name: 'warnData',
      meta: {label: '告警统计'},
      component: WarnData,
    }, {
      path: '/errorData',
      name: 'errorData',
      meta: {label: '停用统计'},
      component: ErrorData,
    }, {
      path: '/deviceHistoryVersion',
      name: 'deviceHistoryVersion',
      meta: {label: '设备告警可视化'},
      component: DeviceHistoryVersion,
    }, {
      path: '/allHistoryVersion',
      name: 'allHistoryVersion',
      meta: {label: '历史告警可视化'},
      component: AllHistoryVersion,
    }, {
      path: '/tenantList',
      name: 'tenantList',
      meta: {label: '用户列表'},
      component: TenantList,
    }, {
      path: '/userList',
      name: 'userList',
      meta: {label: '管理员列表'},
      component: UserList,
    },{
      path: '/userTenantList',
      name: 'userTenantList',
      meta: {label: '用户列表'},
      component: UserTenantList,
    }, {
      path: '/userInfo',
      name: 'userInfo',
      meta: {label: '个人中心'},
      component: UserInfo,
    }, {
      path: '/eventSource',
      name: 'eventSource',
      meta: {label: '传输协议'},
      component: EventSource,
    }, {
      path: '/ethAlertList',
      name: 'ethAlertList',
      meta: {label: '区块链存储'},
      component: EthAlertList,
    }, {
      path: '/test',
      name: 'test',
      meta: {label: 'test'},
      component: Test,
    }]

  }, {
    path: '/error',
    name: '出错页面',
    component: Error
  }]


