/*
 * @Date: 2022-06-21 18:15:17
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-07-11 14:41:10
 * @FilePath: /健康西安-小程序-升级/src/easy-ui/components/es-modal/types.ts
 */
export interface ModalOptions {
  width?: number;
  mode?: "top" | "bottom" | "center";
}
export interface ModalInstance {
  openModal: () => void;
  setProps: (props: ModalOptions) => void;
  closeModal: () => void;
}
