/*
 * @Date: 2022-05-26 15:16:34
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-05-26 19:04:39
 * @FilePath: /easy-app/src/easy-ui/components/es-list/index.ts
 */
import { ref, unref } from "vue";
import esList from "./index.vue";

import { listActionsType, listItem, listProps, useEslistReturn } from "./types";
function useEslist(props: listProps): useEslistReturn {
  const esListRef = ref<listActionsType | null>(null);

  function register(actions: listActionsType) {
    esListRef.value = actions;
    unref(esListRef)?.setListData(props.list);
  }
  const methods: listActionsType = {
    removeItemByIndex(index: number) {
      if (esListRef.value) {
        esListRef.value.removeItemByIndex(index);
      } else {
        console.error("es-list 组件还未初始化");
      }
    },
    setListData(listData:listItem[]){
      if (esListRef.value) {
        esListRef.value.setListData(listData);
      } else {
        console.error("es-list 组件还未初始化");
      }
    }
  };

  return [register, methods as listActionsType];
}
export * from './types';
export { esList, useEslist };
