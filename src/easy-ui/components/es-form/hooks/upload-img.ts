/*
 * @Date: 2022-06-08 11:57:12
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-08 15:46:02
 * @FilePath: /easy-app/src/easy-ui/components/es-form/hooks/upload-img.ts
 */
import { formItem } from "./../types";
export function useUploadImg() {
  function uploadImgchoose(formData: any, schema: formItem) {
    uni.chooseImage({
      count: 1,
      sizeType: schema.componentProps?.uploadProps?.chooseImgProps
        ?.sizeType || ["compressed", "original"],
      sourceType: schema.componentProps?.uploadProps?.chooseImgProps
        ?.sourceType || ["album", "camera"],
      success: (res) => {
        let tempFilePaths = res.tempFilePaths;
        uni.uploadFile({
          name: "file",
          filePath: tempFilePaths[0],
          url:
            schema.componentProps?.uploadProps?.chooseImgProps?.uploadApiUrl ||
            import.meta.env["VITE_APP_UPLOADAPI"],
          success() {
            formData[schema.field].push("http://cdn.gek6.cn/avatar/2.jpg");
          },
          complete() {
            if (
              import.meta.env.MODE === "dev" &&
              import.meta.env["VITE_APP_UPLOADAPI"] ===
                "http://example.com/upload"
            )
              formData[schema.field].push("http://cdn.gek6.cn/avatar/2.jpg");
          },
        });
      },
    });
  }
  function uploadImgPreview(formData: any, schema: formItem,index:number) {
    uni.previewImage({
      urls: formData[schema.field],
      current:index
    })
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
