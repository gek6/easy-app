/*
 * @Date: 2022-06-01 10:09:03
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-01 10:21:45
 * @FilePath: /easy-app/src/router/index.js
 */
/**
 * 代替 pages.json
 */
module.exports = {
  // 主包路由
  pages: require("./pkg-main/index.js"),
  // 分包路由
  // subPackages: [require("./pkg-worker"), require("./pkg-user")],
  globalStyle: require("./globalStyle/index.js"),
  // 启动页面
  condition: require("./condition/index.js"),
};
