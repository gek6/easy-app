/*
 * @Date: 2022-05-20 15:15:36
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-05-20 15:18:31
 * @FilePath: /my-vue3-project/src/utils/auth/token.ts
 */

const TOKENKEY = 'app-note-token';
export function getToken(){
  return uni.getStorageSync(TOKENKEY)
}

export function setToken(token:string){
  uni.setStorageSync(TOKENKEY, token)
}

export function removeToken(){
  uni.removeStorageSync(TOKENKEY)
}