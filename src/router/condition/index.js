/*
 * @Date: 2022-06-01 10:21:53
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-01 14:27:49
 * @FilePath: /easy-app/src/router/condition/index.js
 */
/**
 * 启动模式配置，仅开发期间生效，用于模拟直达页面的场景，如：小程序转发后，用户点击所打开的页面。
 */
module.exports = {
  current: 0, //当前激活的模式（list 的索引项）
  list: [
    // pkg-main/pages/feedback/index
    {
      name: "绑定手机号", //模式名称
      path: "pages/bind-phone/index", //启动页面，必选
      query: "", //启动参数，在页面的onLoad函数里面得到。
    },
    {
      name: "示例-列表页", //模式名称
      path: "pages/example/list/index", //启动页面，必选
      query: "", //启动参数，在页面的onLoad函数里面得到。
    },
    {
      name: "示例-表单", //模式名称
      path: "pages/example/form/index", //启动页面，必选
      query: "", //启动参数，在页面的onLoad函数里面得到。
    },
    {
      name: "示例-按钮", //模式名称
      path: "pages/example/button/index", //启动页面，必选
      query: "", //启动参数，在页面的onLoad函数里面得到。
    },
  ],
};
