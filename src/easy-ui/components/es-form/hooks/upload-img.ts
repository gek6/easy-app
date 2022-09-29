/*
 * @Date: 2022-06-08 11:57:12
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-07-12 11:18:42
 * @FilePath: /健康西安-小程序-升级/src/easy-ui/components/es-form/hooks/upload-img.ts
 */
import { formItem } from "./../types";
import { path2base64 } from "/@/easy-ui/utils/img-file";
export function useUploadImg() {
  function uploadImgchoose(formData: any, schema: formItem) {
    uni.chooseImage({
      count: 1,
      sizeType: schema.componentProps?.uploadProps?.chooseImgProps
        ?.sizeType || ["compressed", "original"],
      sourceType: schema.componentProps?.uploadProps?.chooseImgProps
        ?.sourceType || ["album", "camera"],
      success: async (res) => {
        let base64Data: string = await path2base64(res.tempFilePaths[0]);
        formData[schema.field].push(base64Data);
        schema.componentProps?.uploadProps?.uploadSuccessHandler &&
          schema.componentProps?.uploadProps?.uploadSuccessHandler(base64Data);
      },
    });
  }
  function uploadImgPreview(formData: any, schema: formItem, index: number) {
    uni.previewImage({
      urls: formData[schema.field],
      current: index,
    });
  }

  function uploadImgDelete(formData: any, schema: formItem, index: number) {
    uni.showModal({
      title: "提示",
      content: "确定要删除该图片吗？",
      success: (res) => {
        if (res.confirm) {
          formData[schema.field].splice(index, 1);
        }
      },
    });
  }
  return {
    uploadImgchoose,
    uploadImgPreview,
    uploadImgDelete,
  };
}
