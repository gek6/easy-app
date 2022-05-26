/*
 * @Date: 2022/2/22 10:36 上午
 * @Author: lane
 * @FilePath: /my-vue3-project/src/utils/http/index.ts
 */

import config from "../../config";
import qs from "qs";
import {
  getOptions,
  postOptions,
  requestOptions,
  serverResponse,
} from "./interface";
import { storageKeys, httpCode } from "./enum";
import { getToken } from "../auth/token";

const alertConfirmBtnColor = "#019fba";
/**
 * 请求前拦截器
 * @param options
 */
const httpBefore = function (options: requestOptions) {
  !options.header ? (options.header = {}) : "";
  let token = getToken() || "";
  token ? (options.header.Authorization = config.tokenPrefix + token) : "";
  return options;
};
/**
 * 请求后拦截器
 * @param response
 */
const httpAfter = async function (response: any): Promise<serverResponse> {
  // 判断请求状态码
  if (response.statusCode !== 200) {
    console.warn("请求异常");
    uni.showModal({
      title: "服务异常",
      content: `错误代码:${response.statusCode}`,
      showCancel: false,
      confirmColor: alertConfirmBtnColor,
    });
    uni.hideLoading();
    return Promise.reject(
      `服务异常|错误代码:${response.statusCode}|错误信息:http请求异常`
    );
  } else {
    // 判断业务状态码
    try {
      await checkStatusCode(response.data);
      // console.log('判断业务状态码成功', response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
/**
 * 检测业务码状态
 * @param res
 */
const checkStatusCode = async function (res: serverResponse) {
  if (res.code === httpCode.FAIL) {
    uni.showModal({
      title: "系统提示",
      content: `${res.msg}`,
      showCancel: false,
      confirmColor: alertConfirmBtnColor,
    });
    uni.hideLoading();
    throw `服务异常|错误代码:${res.code}|错误信息:${res.msg}`;
  }
  if (res.code === httpCode.NO_AUTH) {
    uni.removeStorageSync(storageKeys.OPENID);
    uni.removeStorageSync(storageKeys.PERSON_NAME);
    uni.removeStorageSync(storageKeys.TOKEN);

    uni.showModal({
      title: httpCode.NO_AUTH.toString(),
      content: `登录过期,点击确定重新登录`,
      showCancel: false,
      confirmColor: alertConfirmBtnColor,
      success() {
        uni.clearStorageSync();
        uni.reLaunch({
          url: "/pkg-main/pages/index/index",
        });
      },
    });
    uni.hideLoading();
    throw `服务异常|错误代码:${res.code}|错误信息:${res.msg}`;
  }

  if (res.code !== httpCode.SUCCESS) {
    uni.showModal({
      title: "服务异常",
      content: `错误代码:${res.code}`,
      showCancel: false,
      confirmColor: alertConfirmBtnColor,
    });
    uni.hideLoading();
    throw `服务异常|错误代码:${res.code}|错误信息:${res.msg}`;
  }
};

const http = {
  get(url: string = "", options: getOptions = {}): Promise<serverResponse> {
    options = httpBefore(<requestOptions>options);
    return new Promise((resolve, reject) => {
      uni.request({
        url: `${config.baseURL}${url || options.url}`,
        method: "GET",
        data: {
          ...(options.params || {}),
        },
        header: {
          ...options.header,
        },
        success: async function (res) {
          try {
            const rs = await httpAfter(res);
            resolve(rs);
          } catch (err) {
            reject(err);
          }
        },
        fail(err) {
          reject(err);
        },
      });
    });
  },
  post(
    url: string = "",
    data: object = {},
    options: postOptions = {}
  ): Promise<serverResponse> {
    options = httpBefore(<requestOptions>options);

    let queryString = qs.stringify(options.params || {});
    let URL = `${config.baseURL}${url || options.url}`;
    if (queryString) {
      URL = `${config.baseURL}${url || options.url}?${queryString}`;
    }

    return new Promise((resolve, reject) => {
      uni.request({
        url: URL,
        method: "POST",
        data: {
          ...options.params,
          ...data,
          ...options.data,
        },
        header: {
          ...options.header,
        },
        success: async function (res) {
          try {
            const rs = await httpAfter(res);
            resolve(rs);
          } catch (err) {
            reject(err);
          }
        },
        fail(err) {
          reject(err);
        },
      });
    });
  },
  request(options: requestOptions): Promise<serverResponse> {
    options = httpBefore(options);
    let queryString: string = qs.stringify(options.params);
    let URL = `${config.baseURL}${options.url || options.url}`;
    if (queryString) {
      URL = `${config.baseURL}${options.url || options.url}?${queryString}`;
    }
    return new Promise((resolve, reject) => {
      uni.request({
        url: URL,
        method: options.method,
        data: {
          ...options.params,
          ...options.data,
        },
        header: {
          ...options.header,
        },
        success: async function (res) {
          try {
            const rs = await httpAfter(res);
            resolve(rs);
          } catch (err) {
            reject(err);
          }
        },
        fail(err) {
          reject(err);
        },
      });
    });
  },
};

export { http };
