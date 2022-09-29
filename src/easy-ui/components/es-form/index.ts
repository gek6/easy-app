import { ref, unref } from "vue";
import { formMethods, formProps, useEsFormReturn } from "./types";

/*
 * @Date: 2022-06-02 10:20:42
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-07-12 16:10:01
 * @FilePath: /健康西安-小程序-升级/src/easy-ui/components/es-form/index.ts
 */
export function useEsForm(props: formProps): useEsFormReturn {
  const esFormRef = ref<formMethods | null>(null);

  function register(actions: formMethods) {
    esFormRef.value = actions;
    unref(esFormRef)?.setProps(props);
  }

  const methods: formMethods = {
    setProps(props) {
      if (esFormRef.value) {
        esFormRef.value.setProps(props);
      } else {
        console.error("es-form 组件还未初始化");
      }
    },
    getFieldsValue() {
      if (esFormRef.value) {
        return esFormRef.value.getFieldsValue();
      } else {
        console.error("es-form 组件还未初始化");
      }
    },
    setFieldsValue(data: any) {
      if (esFormRef.value) {
        return esFormRef.value.setFieldsValue(data);
      } else {
        console.error("es-form 组件还未初始化");
      }
    },
    async validate(){
      if (esFormRef.value) {
        return await esFormRef.value.validate();
      } else {
        console.error("es-form 组件还未初始化");
        return false
      }
    }
  };

  return [register, methods as formMethods];
}
