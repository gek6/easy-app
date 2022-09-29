/*
 * @Date: 2022-06-02 10:21:12
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-07-12 16:25:13
 * @FilePath: /健康西安-小程序-升级/src/easy-ui/components/es-form/types.ts
 */
// 组件属性
export interface componentProps {
  // Select ApiSelect CascadeSelect ApiCascadeSelect 可用属性
  // 需要远程加载选项时的request
  api?: () => any;
  // 远程加载的选项 label 指定字段名
  labelField?: string;
  // 远程加载的选项 value 指定字段名
  valueField?: string;
  // 远程加载的选项 结果数组对象 指定字段名
  resultField?: string;
  // 结果为数组时,显示的结果拼接字符
  joinStr?: string;
  // 非远程加载的选项
  options?: Record<string, any>[];
  // 待选择和输入时的占位提示文字
  placeholder?: string;
  // text	文本输入键盘 number	数字输入键盘 idcard	身份证输入键盘 digit	带小数点的数字键盘 tel	电话输入键盘
  // https://uniapp.dcloud.io/component/input.html
  inputType?: "text" | "number" | "idcard" | "digit" | "tel";
  // 是否禁用
  disabled?: boolean;
  // 短信验证码获取间隔
  verifyCodeTimer?: number;
  // 短信验证码按钮属性
  verifyCodeBtnProps?: {
    // 按钮文字
    text?: string;
    size?: string;
    type?: string;
    plain?: boolean;
    round?: boolean;
  };
  /**
   * 短信验证码位数
   */
  verifyCodeValueLength?: number;
  /**
   * 短信验证码 获取成功后回调
   */
  verifyCodeSuccessHandler?: () => void;

  onChange?: (value: any) => any;

  /** 插槽名称，不支持双向绑定 */
  slot?: string;

  /**
   * 上传配置
   * @maxNum number 最大上传数量
   * @chooseImgProps object 选择图片配置
   */
  uploadProps?: uploadProps;
  // 允许其他未知属性
  [propName: string]: any;
}
export interface formItem {
  defaultValue?: string | string[] | number | number[];
  // 字段名称
  field: string;
  // 字段标题
  label: string;
  // 字段类型
  component: componentType;
  // 字段属性
  componentProps?: componentProps;
  // 是否必填
  required?: boolean;
  // 验证器
  validator?: (
    formData: any,
    formSchemas: formItem[],
    field: string
  ) => Promise<boolean>;
}
// 组件类型
export type componentType =
  | "Input"
  | "VerifyCodeInput"
  | "Select"
  | "ApiSelect"
  | "CascadeSelect"
  | "ApiCascadeSelect"
  | "Date"
  | "Textarea"
  | "Checkbox"
  | "Radio"
  | "Switch"
  | "Slider"
  | "Cascader"
  | "Upload"
  | "Rate"
  | "Color"
  | "Time"
  | "DateTime"
  | "SplitLine"
  | "Slot";
export interface formProps {
  // 表单标题
  title?: string;
  // 表单结构
  schemas: formItem[];
  // 是否显示按钮组
  showActionButtonGroup?: boolean;
  showItemSplitLine?: boolean;
}
export interface formMethods {
  setProps: (props: formProps) => void;
  getFieldsValue: () => any;
  setFieldsValue: (data: any) => void;
  validate: () => Promise<boolean>;
}
export type useEsFormReturn = [(actions: formMethods) => void, formMethods];
type chooseImgSizeType = "compressed" | "original";
type chooseSourceType = "album" | "camera";
export type chooseImgProps = {
  /**
   * 上传图片接口地址 默认读取env中的配置
   */
  uploadApiUrl?: string;
  count?: number;
  sizeType?: chooseImgSizeType[];
  sourceType?: chooseSourceType[];
  success?: (res: any) => void;
  fail?: (err: any) => void;
  complete?: (res: any) => void;
};
export type uploadProps = {
  /**
   * 上传最大数量
   */
  maxNum?: number;
  /**
   * 底部提示信息
   */
  alertText?: string;
  /**
   * 选择图片配置
   * @uploadApiUrl string 上传图片接口地址 默认读取env中的配置
   * @sizeType string[] 图片尺寸类型 默认值['compressed','original']
   * @sourceType string[] 图片来源类型 默认值['album','camera']
   * @success function 成功回调
   * @fail function 失败回调
   * @complete function 完成回调
   */
  chooseImgProps?: chooseImgProps;
  /**
   * 是否显示 1/9 的统计数量
   */
  hideNum?: boolean;

  /**
   * 上传插槽
   */
  slot?: string;
  /**
   * 预览插槽
   * 这玩意 在H5好使， 小程序上 不行，组件向插槽传参无法实现
   */
  previewSlot?: string;

  previewWidth?: number;
  previewHeight?: number;
  uploadSuccessHandler?: (imgBase64: string) => void;
};
