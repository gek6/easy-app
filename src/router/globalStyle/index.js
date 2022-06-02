/*
 * @Date: 2022-06-01 10:18:45
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-01 10:24:35
 * @FilePath: /easy-app/src/router/globalStyle/index.js
 */
const uniContext =
  require("@dcloudio/uni-cli-shared/dist/preprocess/context").getPreVueContext();

const options = {
  navigationBarTextStyle: "black",
  navigationBarTitleText: "easy-app",
  navigationBarBackgroundColor: "#F8F8F8",
  backgroundColor: "#F8F8F8",
};
if (uniContext.H5) {
  options.navigationStyle = "custom";
}
module.exports = options;

// uniContext 结果示例 用来做条件编译
// {
//   hotJs: [Function (anonymous)],
//   APP: false,
//   APP_NVUE: false,
//   APP_PLUS: false,
//   APP_PLUS_NVUE: false,
//   APP_VUE: false,
//   H5: false,
//   MP: true,
//   MP_360: false,
//   MP_ALIPAY: false,
//   MP_BAIDU: false,
//   MP_QQ: false,
//   MP_LARK: false,
//   MP_TOUTIAO: false,
//   MP_WEIXIN: true,
//   MP_KUAISHOU: false,
//   MP_JD: false,
//   QUICKAPP_NATIVE: false,
//   QUICKAPP_WEBVIEW: false,
//   QUICKAPP_WEBVIEW_HUAWEI: false,
//   QUICKAPP_WEBVIEW_UNION: false,
//   VUE2: false,
//   VUE3: true
// }
