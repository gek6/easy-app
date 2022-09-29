/*
 * @Date: 2022-07-11 18:39:51
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-07-12 17:01:01
 * @FilePath: /健康西安-小程序-升级/src/easy-ui/utils/img-file/index.ts
 */
export async function h5BlobUrlToBlobObj(url: string): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function (e) {
      if (this.status == 200) {
        var Blob = this.response;
        resolve(Blob);
      }
    };
    xhr.send();
  });
}
export async function blobObjToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const Reader = new FileReader();
    Reader.readAsDataURL(blob);
    Reader.onload = function (e: any) {
      let getRes = e.target.result; //读取的结果在result中
      resolve(getRes); // 这里的base64只需要 后面的数据部分 不要 data:image/png;base64,
    };
  });
}

export async function appReadFileToBase64(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    plus.io.resolveLocalFileSystemURL(path, function (entry) {
      // @ts-ignore
      entry.file(
        function (file: any) {
          // @ts-ignore
          var AppReader = new plus.io.FileReader();
          AppReader.onloadend = function (e: any) {
            let base64 = e.target.result;
            resolve(base64.split(",")[1]);
          };
          AppReader.onerror = function (err) {
            reject(err);
          };
          AppReader.readAsDataURL(file);
        },
        function (e: any) {
          reject(e);
        }
      );
    });
  });
}
export function path2base64(path: string): Promise<string> {
  console.log("path2base64", path);

  const fileType = {
    png: "data:image/png;base64,",
    jpg: "data:image/jpeg;base64,",
    gif: "data:image/gif;base64,",
    bmp: "data:image/bmp;base64,",
    webp: "data:image/webp;base64,",
    tiff: "data:image/tiff;base64,",
    svg: "data:image/svg;base64,",
    jpeg: "data:image/jpeg;base64,",
    jfif: "data:image/jfif;base64,",
  };

  return new Promise(async (resolve, reject) => {
    // #ifdef MP-WEIXIN
    console.log("path2base64 微信小程序");
    const extName: string = path.split(".")[path.split(".").length - 1];
    // @ts-ignore
    let base64Prefix: string = fileType[extName || "png"];
    // @ts-ignore
    let fsm = wx.getFileSystemManager();
    let base64Res = fsm.readFileSync(path, "base64");
    console.log(base64Res);
    let wxBase64 = base64Prefix + base64Res;
    resolve(wxBase64);

    // #endif

    // #ifdef H5
    console.log("path2base64 H5");
    let blobObj = await h5BlobUrlToBlobObj(path);
    let base64Data = blobObjToBase64(blobObj);
    resolve(base64Data);

    // #endif

    // #ifdef MP-TOUTIAO
    console.log("path2base64 头条小程序");
    uni.request({
      method: "GET",
      url: path,
      responseType: "arraybuffer",
      success(res: any) {
        let base64 = uni.arrayBufferToBase64(res.data);
        resolve(base64);
      },
      fail(err) {
        reject(err);
      },
    });
    // #endif

    // #ifdef APP-PLUS
    console.log("path2base64 APP");
    console.log(path);
    let base64 = await appReadFileToBase64(path);
    resolve(base64);
    // #endif
  });
}

/**
 * 将base64转为本地临时文件
 * 该方法只支持微信小程序
 * @param base64
 * @returns
 */
export function base64ToLocalPath(base64: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let base64data = base64; // base64
    // @ts-ignore
    const fsm = wx.getFileSystemManager();
    const FILE_BASE_NAME = "tmp_base64src"; //自定义文件名
    const [, format, bodyData] =
      /data:image\/(\w+);base64,(.*)/.exec(base64data) || [];
    if (!format) {
      return new Error("ERROR_BASE64SRC_PARSE");
    }
    // @ts-ignore
    const filePath = `${wx.env.USER_DATA_PATH}/${FILE_BASE_NAME}.${format}`;
    // @ts-ignore
    const buffer = wx.base64ToArrayBuffer(bodyData);
    fsm.writeFile({
      filePath,
      data: buffer,
      encoding: "binary",
      success(r: any) {
        resolve(filePath);
      },
      fail() {
        return new Error("ERROR_BASE64SRC_WRITE");
      },
    });
  });
}
