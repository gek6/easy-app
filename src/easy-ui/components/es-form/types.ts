/*
 * @Date: 2022-06-02 10:21:12
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-02 18:04:06
 * @FilePath: /easy-app/src/easy-ui/components/es-form/types.ts
 */
// 组件属性
export interface componentProps {
  // 需要远程加载选项时的request
  api?: () => any;
  // 远程加载的选项 label 指定字段名
  labelField?: string;
  // 远程加载的选项 value 指定字段名
  valueField?: string;
  // 非远程加载的选项
  options?: {
    label: string;
    value: any;
    // 允许其他未知属性
    [propName: string]: any;
  }[];
  // 待选择和输入时的占位提示文字
  placeholder?: string;
  // text	文本输入键盘 number	数字输入键盘 idcard	身份证输入键盘 digit	带小数点的数字键盘 tel	电话输入键盘
  // https://uniapp.dcloud.io/component/input.html
  inputType?: "text" | "number" | "idcard" | "digit" | "tel";
  // 是否禁用
  disabled?: boolean;
  // 是否显示按钮组
  showActionButtonGroup?: boolean;
  // 允许其他未知属性
  [propName: string]: any;
}
export interface formItem {
  defaultValue?: string;
  // 字段名称
  field: string;
  // 字段标题
  label: string;
  // 字段类型
  component:
    | "Input"
    | "Select"
    | "ApiSelect"
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
    | "SplitLine";
  // 字段属性
  componentProps?: componentProps;
}
export interface formProps {
  title?: string;
  schemas: formItem[];
}
export interface formMethods {
  setProps: (props: formProps) => void;
  getFieldsValue: () => any;
}
export type useEsFormReturn = [(actions: formMethods) => void, formMethods];
