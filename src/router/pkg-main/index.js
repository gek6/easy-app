/*
 * @Date: 2022-06-01 10:10:14
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-01 14:20:38
 * @FilePath: /easy-app/src/router/pkg-main/index.js
 */
/**
 * 主包页面路由
 */
 module.exports = [
  {
    path: "pages/index/index",
    style: {
      navigationBarTitleText: "首页",
    },
  },
  {
    path: "pages/bind-phone/index",
    style: {
      navigationBarTitleText: "绑定手机号",
    },
  },
  {
    path: "pages/example/form/index",
    style: {
      navigationBarTitleText: "示例-表单",
    },
  },
  {
    path: "pages/example/list/index",
    style: {
      navigationBarTitleText: "示例-列表",
    },
  },
  {
    path: "pages/example/button/index",
    style: {
      navigationBarTitleText: "示例-按钮",
    },
  },
];
