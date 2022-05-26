/*
 * @Date: 2022-05-20 14:01:46
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-05-20 14:03:50
 * @FilePath: /my-vue3-project/src/utils/wxmp/auth.ts
 */
export function getAuthCode():Promise<string> {
  return new Promise((resolve,reject)=>{
    uni.login({
      provider: 'weixin',
      success: function (loginRes) {
        console.log(loginRes)
        resolve(loginRes.code)
      },
      fail(err) {
        reject(err)
      }
      
    })
  })
  
}
