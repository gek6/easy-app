/*
 * @Date: 2022-06-07 09:44:58
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-07 18:13:10
 * @FilePath: /easy-app/src/pages/example/form/mock/dataApi.ts
 */
import { http } from "/@/utils/http";
// 静态选项
export const staticOptions = [
  {
    label: "选项1",
    value: "1",
  },
  {
    label: "选项2",
    value: "2",
  },
];
export const staticCascadeOptions = [
  {
    label: "一年级",
    value: "1-0",
    children: [
      {
        label: "1.1班",
        value: "1-1",
      },
      {
        label: "1.2班",
        value: "1-2",
      },
    ],
  },
  {
    label: "二年级",
    value: "2-0",
  },
  {
    label: "三年级",
    value: "3-0",
  },
];
// 远程选项
export function getNormalPickerOptionsApi() {
  //  http.get()
  return new Promise((resolve, reject) => {
    // reject('出问题了'); // 表单会捕获到这个异常 在页面中显示

    resolve({
      code: "0",
      msg: "success",
      data: [
        {
          label: "北京",
          value: "110000",
        },
        {
          label: "天津",
          value: "120000",
        },
        {
          label: "河北",
          value: "130000",
        },
      ],
    });
  });
}
// 远程级联选项
export function getCascadeSelectOptionsApi() {
  return new Promise((resolve) => {
    resolve({
      code: "0",
      msg: "success",
      data: [
        {
          name: "ID1",
          id: "1",
          children: [
            {
              name: "ID1.1",
              id: "1.1",
            },
            {
              name: "ID1.2",
              id: "1.2",
            },
          ],
        },
        {
          name: "ID2",
          id: "2",
        },
        {
          name: "ID3",
          id: "3",
        },
      ],
    });
  });
}

export function getVerifyCodeApi(){
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve({
        code: "0",
        msg: "发送成功"
      })
    }, 2000);
  })
}
