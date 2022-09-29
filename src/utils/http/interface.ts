/*
 * @Date: 2022-05-20 13:24:07
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-05-20 13:24:10
 * @FilePath: /my-vue3-project/src/utils/http/interface.ts
 */
interface getOptions {
  params?: object,
  url?: string,
  header?: object,
}

interface postOptions {
  url?: string,
  params?: object,
  data?: object,
  header?: httpHeader
}
interface httpHeader {
  Authorization?:string
}

interface requestOptions extends postOptions {
  method: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';
}

interface serverResponse {
  rows?: any;
  code: number,
  msg: string,
  data: any
}

export {
  getOptions, postOptions, requestOptions, serverResponse
}
