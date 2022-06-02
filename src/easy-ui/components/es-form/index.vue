<!--
 * @Date: 2022-05-31 18:08:50
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-06-02 18:17:45
 * @FilePath: /easy-app/src/easy-ui/components/es-form/index.vue
-->
<template>
  <view>
    <view class="es-form-loading" v-if="esFormLoading">
      <text class="es-icon es-icon-loading es-icon-animation-spin"></text>
      表单加载中...
    </view>
    <view class="es-form-container" v-else>
      <view class="es-form-block">
        <view
          v-for="(formSchema, schemaIndex) in formSchemas"
          :key="schemaIndex"
        >
          <!-- Input -->
          <view
            :class="{
              'es-form-item-round-bottom':
                formSchemas[schemaIndex + 1].component === 'SplitLine',
              'es-form-item-round-top':
                schemaIndex > 0 &&
                formSchemas[schemaIndex - 1].component === 'SplitLine',
            }"
            class="es-form-item"
            v-if="formSchema.component === 'Input'"
          >
            <view class="es-form-item-container">
              <view class="es-form-item-label">
                <text>{{ formSchema.label || "未知" }}</text>
              </view>
              <view class="es-form-item-content">
                <input
                  class="input"
                  placeholder-class="input-placeholder"
                  v-model="formData[formSchema.field]"
                  :type="formSchema.componentProps?.inputType || 'text'"
                  :placeholder="
                    formSchema.componentProps?.placeholder || '请输入'
                  "
                />
              </view>
              <view
                class="es-form-item-clear-icon"
                v-if="formData[formSchema.field]"
                @click.stop="clearSchemaData(formSchema)"
              >
                <view class="es-form-item-clear-icon-box">
                  <text class="clear-icon es-icon es-icon-guanbi1"></text>
                </view>
              </view>
            </view>
            <view class="es-form-item-bottom-line"></view>
          </view>
          <!-- select -->
          <picker
            mode="selector"
            :range-key="formSchema.componentProps?.labelField || 'label'"
            :disabled="formSchema.componentProps?.disabled"
            :range="formSchema.componentProps?.options"
            :class="{
              'es-form-item-round-bottom':
                formSchemas[schemaIndex + 1].component === 'SplitLine',
              'es-form-item-round-top':
                schemaIndex > 0 &&
                formSchemas[schemaIndex - 1].component === 'SplitLine',
            }"
            class="es-form-item"
            @change="selectChange($event, formSchema)"
            v-if="formSchema.component === 'Select'"
          >
            <view class="es-form-item-container">
              <view class="es-form-item-label">
                <text>{{ formSchema.label }}</text>
              </view>
              <view class="es-form-item-content">
                <text
                  class="input"
                  :class="{
                    'input-placeholder': !formData[formSchema.field],
                  }"
                >
                  {{ formData[formSchema.field + "__label"] || "请选择" }}
                </text>
              </view>
              <view class="es-form-item-clear-icon">
                <text class="es-icon es-icon-xiangyou"></text>
              </view>
            </view>
            <view class="es-form-item-bottom-line"></view>
          </picker>
          <!-- ApiSelect -->
          <picker
            mode="selector"
            :range-key="formSchema.componentProps?.labelField || 'label'"
            :disabled="formSchema.componentProps?.disabled"
            :range="formSchema.componentProps?.options"
            :class="{
              'es-form-item-round-bottom':
                formSchemas[schemaIndex + 1].component === 'SplitLine',
              'es-form-item-round-top':
                schemaIndex > 0 &&
                formSchemas[schemaIndex - 1].component === 'SplitLine',
            }"
            class="es-form-item"
            @change="apiSelectChange($event, formSchema)"
            v-if="formSchema.component === 'ApiSelect'"
          >
            <view class="es-form-item-container">
              <view class="es-form-item-label">
                <text>{{ formSchema.label }}</text>
              </view>
              <view class="es-form-item-content">
                <text
                  class="input"
                  :class="{
                    'input-placeholder': !formData[formSchema.field],
                  }"
                >
                  {{ formData[formSchema.field + "__label"] || "请选择" }}
                </text>
              </view>
              <view class="es-form-item-clear-icon">
                <text class="es-icon es-icon-xiangyou"></text>
              </view>
            </view>
            <view class="es-form-item-bottom-line"></view>
          </picker>
          <view
            class="es-form-item-split-line"
            v-if="formSchema.component === 'SplitLine'"
          ></view>
        </view>
      </view>
      <view class="action-button-group">
        <view style="width: 40%"
          ><es-button round plain type="primary" block>重置</es-button></view
        >
        <view style="width: 40%"
          ><es-button round type="primary" block>提交</es-button></view
        >
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { onMounted, ref, unref } from "vue";
import { valueMap } from "./defaultValueMap";
import { formItem, formMethods, formProps } from "./types";
import cloneDeep from "lodash/cloneDeep";
import esButton from "../es-button/index.vue";
const emit = defineEmits(["register"]);
const formData = ref<any>({});
const formSchemas = ref<formItem[]>([]);
const esFormLoading = ref<boolean>(false);
function selectChange(event: any, formSchema: formItem) {
  console.log(event.detail);

  const { value: selectedIndex } = event.detail;
  const { options } = formSchema.componentProps || [];
  if (options?.length) {
    formData.value[formSchema.field] = options[selectedIndex]["value"];
    formData.value[formSchema.field + "__label"] =
      options[selectedIndex]["label"];
  }
}
function apiSelectChange(event: any, formSchema: formItem) {
  const { value: selectedIndex } = event.detail;
  const { options } = formSchema.componentProps || [];
  if (options?.length) {
    formData.value[formSchema.field] =
      options[selectedIndex][formSchema.componentProps?.valueField || "value"];
    formData.value[formSchema.field + "__label"] =
      options[selectedIndex][formSchema.componentProps?.labelField || "label"];
  }
}
async function setProps(props: formProps) {
  esFormLoading.value = true;
  for (let i = 0; i < props.schemas.length; i++) {
    const schema = props.schemas[i];
    formData.value[schema.field] =
      schema.defaultValue || valueMap[schema.component] || "";
    if (schema.component === "ApiSelect") {
      let api = schema.componentProps?.api;
      if (schema.componentProps && api) {
        const res = await api();
        schema.componentProps.options = res;
      }
    }
  }
  esFormLoading.value = false;
  formSchemas.value = props.schemas;
}
function clearSchemaData(schema: formItem) {
  console.log("clearSchemaData", schema);

  formData.value[schema.field] = valueMap[schema.component] || "";
}
// 说明: 获取表单值
function getFieldsValue() {
  let formdata = cloneDeep(formData.value);
  for (const key in formdata) {
    console.log(key);
    if (key.indexOf("__label") > -1) {
      delete formdata[key];
    }
  }
  return formdata;
}
// 校验整个表单
function validate() {}
onMounted(() => {
  emit("register", {
    setProps,
    getFieldsValue,
  } as formMethods);
});

// setFieldsValue

// 类型: <T>(values: T) => Promise<void>

// 说明: 设置表单字段值

// resetFields

// 类型: ()=> Promise<any>

// 说明: 重置表单值

// validateFields

// 类型: (nameList?: NamePath[]) => Promise<any>

// 说明: 校验指定表单项

// validate

// 类型: (nameList?: NamePath[]) => Promise<any>

// 说明: 校验整个表单

// submit

// 类型: () => Promise<void>

// 说明: 提交表单

// scrollToField

// 类型: (name: NamePath, options?: ScrollOptions) => Promise<void>

// 说明: 滚动到对应字段位置

// clearValidate

// 类型: (name?: string | string[]) => Promise<void>

// 说明: 清空校验
// setProps

// TIP

// 设置表单的 props 可以直接在标签上传递，也可以使用 setProps，或者初始化直接写 useForm(props)

// 类型: (formProps: Partial<FormProps>) => Promise<void>

// 说明: 设置表单 Props

// removeSchemaByFiled

// 类型: (field: string | string[]) => Promise<void>

// 说明: 根据 field 删除 Schema

// appendSchemaByField

// 类型: ( schema: FormSchema, prefixField: string | undefined, first?: boolean | undefined ) => Promise<void>

// 说明: 插入到指定 filed 后面，如果没传指定 field，则插入到最后,当 first = true 时插入到第一个位置

// updateSchema

// 类型: (data: Partial<FormSchema> | Partial<FormSchema>[]) => Promise<void>

// 说明: 更新表单的 schema, 只更新函数所传的参数
</script>
<style lang="scss">
.es-form-loading {
  height: 300rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
$es-form-label-color: #343434;
$es-form-item-height: 120rpx;
.es-form-container {
  width: 100%;
  min-height: 100rpx;
  .es-form-block {
    width: 100%;

    min-height: 50rpx;
    .es-form-item-split-line {
      height: 20rpx;
      background-color: transparent;
    }
    .es-form-item:last-child {
      .es-form-item-bottom-line {
        display: none;
      }
    }
    .es-form-item.es-form-item-round-bottom {
      border-bottom-left-radius: 20rpx;
      border-bottom-right-radius: 20rpx;
    }
    .es-form-item.es-form-item-round-top {
      border-top-left-radius: 20rpx;
      border-top-right-radius: 20rpx;
    }
    .es-form-item {
      padding: 0 34rpx;
      height: $es-form-item-height;
      position: relative;
      background-color: #fff;
      .es-form-item-container {
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        .es-form-item-label {
          width: 29%;

          color: $es-form-label-color;
          font-size: $uni-font-size-base;
        }
        .es-form-item-content {
          margin-left: 2%;
          width: 60%;
          color: $es-form-label-color;
          font-weight: bold;

          font-size: $uni-font-size-base;
          .input {
            font-size: $uni-font-size-lg;
          }
          .input-placeholder {
            font-size: $uni-font-size-lg;

            color: $uni-text-color-placeholder;
          }
        }
        .es-form-item-clear-icon {
          width: $es-form-item-height;
          height: $es-form-item-height;

          width: 9%;
          display: flex;
          justify-content: center;
          align-items: center;

          .es-form-item-clear-icon-box {
            width: 28rpx;
            height: 28rpx;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: $uni-text-color-placeholder;
          }
          .clear-icon {
            font-size: 12rpx;
            color: #fff;
          }
        }
      }
      .es-form-item-bottom-line {
        position: absolute;
        width: 100%;
        height: 2rpx;
        bottom: 0;
        left: 0;
        background-color: $uni-bg-color-grey;
        // background-color: #aaa;
      }
    }
  }
}
.action-button-group {
  height: 120rpx;
  align-items: center;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 20rpx;
}
</style>
