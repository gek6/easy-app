/*
 * @Date: 2022-06-07 17:34:45
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-07 18:12:57
 * @FilePath: /easy-app/src/easy-ui/components/es-form/hooks/verify-code.ts
 */
import { formItem } from "./../types";
import { ref } from "vue";

export function useVerifyCode() {
  const verifyCodeTimer = ref(0);
  const getVerifyCodeBtnIsLoading = ref(false);
  let intervalMarker = null;
  async function getVerifyCode(formData: any, formSchema: formItem) {
    console.log(formData, formSchema);
    let getVerifyCodeApi = formSchema.componentProps?.api;
    if (verifyCodeTimer.value > 0) {
      return;
    }
    
    if (getVerifyCodeApi) {
      getVerifyCodeBtnIsLoading.value = true;
      await getVerifyCodeApi().finally(() => {
        getVerifyCodeBtnIsLoading.value = false;
      });
      formSchema.componentProps?.verifyCodeSuccessHandler?.();
      verifyCodeTimer.value = formSchema.componentProps?.verifyCodeTimer || 60;
      verifyCodeTimer.value--;
      intervalMarker = setInterval(() => {
        verifyCodeTimer.value--;
      }, 1000);
      if (verifyCodeTimer.value === 0) {
        clearInterval(intervalMarker);
      }
    } else {
      console.error("请配置 componentProps.api ");
    }
  }

  return { verifyCodeTimer, getVerifyCode, getVerifyCodeBtnIsLoading };
}
