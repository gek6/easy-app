<!--
 * @Date: 2022-05-31 18:08:50
 * @LastEditors: YuanBo
 * @Author: YuanBo
 * @LastEditTime: 2022-07-12 16:48:18
 * @FilePath: /健康西安-小程序-升级/src/easy-ui/components/es-form/index.vue
-->
<template>
  <view>
    <view class="es-form-loading" v-if="esFormLoading">
      <text class="es-icon es-icon-loading es-icon-animation-spin"></text>
      表单加载中...
    </view>
    <view class="es-form-error" v-else-if="esFormError.isError">
      <view>表单加载出错了</view>
      <view>错误信息</view>
      <view>{{ esFormError.errorInfo }}</view>
    </view>
    <view class="es-form-container" v-else>
      <view class="es-form-block">
        <view class="es-form-item-box" v-for="(formSchema, schemaIndex) in formSchemas" :key="schemaIndex">
          <!-- Input 输入框-->
          <view :class="{
            'es-form-item-round-bottom':
              schemaIndex < formSchemas.length - 1 &&
              formSchemas[schemaIndex + 1].component === 'SplitLine',
            'es-form-item-round-top':
              schemaIndex > 0 &&
              formSchemas[schemaIndex - 1].component === 'SplitLine',
          }" class="es-form-item" v-if="formSchema.component === 'Input'">
            <view class="es-form-item-container">
              <view class="es-form-item-label">
                <text>{{ formSchema.label || "未知" }}</text>
              </view>
              <view class="es-form-item-content">
                <input class="input" placeholder-class="input-placeholder" v-model="formData[formSchema.field]"
                  :type="formSchema.componentProps?.inputType || 'text'" :placeholder="
                    formSchema.componentProps?.placeholder || '请输入'
                  " />
              </view>
              <view class="es-form-item-clear-icon" v-if="formData[formSchema.field]"
                @click.stop="clearSchemaData(formSchema)">
                <view class="es-form-item-clear-icon-box">
                  <text class="clear-icon es-icon es-icon-guanbi1"></text>
                </view>
              </view>
            </view>
            <view class="es-form-item-bottom-line" v-if="
              showItemSplitLine &&
              schemaIndex < formSchemas.length - 1 &&
              formSchemas[schemaIndex + 1].component !== 'SplitLine'
            "></view>
          </view>

          <!-- 文字展示 -->
          <view :class="{
            'es-form-item-round-bottom':
              schemaIndex < formSchemas.length - 1 &&
              formSchemas[schemaIndex + 1].component === 'SplitLine',
            'es-form-item-round-top':
              schemaIndex > 0 &&
              formSchemas[schemaIndex - 1].component === 'SplitLine',
          }" class="es-form-item" v-if="formSchema.component === 'Slot'">
            <view class="es-form-item-container">
              <view class="es-form-item-label">
                <text>{{ formSchema.label || "未知" }}</text>
              </view>
              <view class="es-form-item-content">
                <slot v-if="formSchema.componentProps?.slot" :name="formSchema.componentProps?.slot"></slot>
              </view>
            </view>
            <view class="es-form-item-bottom-line" v-if="
              showItemSplitLine &&
              schemaIndex < formSchemas.length - 1 &&
              formSchemas[schemaIndex + 1].component !== 'SplitLine'
            "></view>
          </view>

          <!-- Radio 单选器-->
          <view :class="{
            'es-form-item-round-bottom':
              schemaIndex < formSchemas.length - 1 &&
              formSchemas[schemaIndex + 1].component === 'SplitLine',
            'es-form-item-round-top':
              schemaIndex > 0 &&
              formSchemas[schemaIndex - 1].component === 'SplitLine',
          }" class="es-form-item" v-if="formSchema.component === 'Radio'">
            <view class="es-form-item-container">
              <view class="es-form-item-label">
                <text>{{ formSchema.label || "未知" }}</text>
              </view>
              <view class="es-form-item-content radio-container">
                <view class="radio-item" :class="{
                  active:
                    formSchema.componentProps?.activeIndex === radioIndex,
                }" @click="radioClickHandle(radioIndex, formSchema)" v-for="(radio, radioIndex) in formSchema.componentProps
?.options" :key="radioIndex">
                  <text class="-icon"></text>
                  <text class="-label">{{ radio.label }}</text>
                </view>
              </view>
              <view class="es-form-item-clear-icon" v-if="formData[formSchema.field]"
                @click.stop="clearSchemaData(formSchema)">
                <view class="es-form-item-clear-icon-box">
                  <text class="clear-icon es-icon es-icon-guanbi1"></text>
                </view>
              </view>
            </view>
            <view class="es-form-item-bottom-line" v-if="
              showItemSplitLine &&
              schemaIndex < formSchemas.length - 1 &&
              formSchemas[schemaIndex + 1].component !== 'SplitLine'
            "></view>
          </view>

          <!-- VerifyCodeInput 验证码输入框-->
          <view :class="{
            'es-form-item-round-bottom':
              schemaIndex < formSchemas.length - 1 &&
              formSchemas[schemaIndex + 1].component === 'SplitLine',
            'es-form-item-round-top':
              schemaIndex > 0 &&
              formSchemas[schemaIndex - 1].component === 'SplitLine',
          }" class="es-form-item" v-if="formSchema.component === 'VerifyCodeInput'">
            <view class="es-form-item-container">
              <view class="es-form-item-label">
                <text>{{ formSchema.label || "未知" }}</text>
              </view>
              <view class="es-form-item-content es-form-item-content-verify-code">
                <input class="input" placeholder-class="input-placeholder" v-model="formData[formSchema.field]"
                  :maxlength="
                    formSchema.componentProps?.verifyCodeValueLength || 6
                  " :type="formSchema.componentProps?.inputType || 'text'" :placeholder="
  formSchema.componentProps?.placeholder || '请输入'
" />
                <es-button :type="
                  formSchema.componentProps?.verifyCodeBtnProps?.type ||
                  'primary'
                " :size="
  formSchema.componentProps?.verifyCodeBtnProps?.size ||
  'default'
" :plain="
  formSchema.componentProps?.verifyCodeBtnProps?.plain ||
  false
" :round="
  formSchema.componentProps?.verifyCodeBtnProps?.round ||
  false
" :disabled="verifyCodeTimer > 0" :loading="getVerifyCodeBtnIsLoading" @click="getVerifyCode(formData, formSchema)">{{
    verifyCodeTimer > 0
      ? verifyCodeTimer
      : formSchema.componentProps?.verifyCodeBtnProps?.text ||
      "获取验证码"
}}</es-button>
              </view>
            </view>
            <view class="es-form-item-bottom-line" v-if="
              showItemSplitLine &&
              schemaIndex < formSchemas.length - 1 &&
              formSchemas[schemaIndex + 1].component !== 'SplitLine'
            "></view>
          </view>
          <!-- Select 普通单选-->
          <picker mode="selector" :range-key="formSchema.componentProps?.labelField || 'label'"
            :disabled="formSchema.componentProps?.disabled" :range="formSchema.componentProps?.options" :class="{
              'es-form-item-round-bottom':
                schemaIndex < formSchemas.length - 1 &&
                formSchemas[schemaIndex + 1].component === 'SplitLine',
              'es-form-item-round-top':
                schemaIndex > 0 &&
                formSchemas[schemaIndex - 1].component === 'SplitLine',
            }" class="es-form-item" @change="selectChange($event, formSchema)"
            v-if="formSchema.component === 'Select'">
            <view class="es-form-item-container">
              <view class="es-form-item-label">
                <text>{{ formSchema.label }}</text>
              </view>
              <view class="es-form-item-content">
                <text class="input" :class="{
                  'input-placeholder': !formData[formSchema.field],
                }">
                  {{ formData[formSchema.field + "__label"] || "请选择" }}
                </text>
              </view>
              <view class="es-form-item-clear-icon">
                <text class="es-icon es-icon-xiangyou"></text>
              </view>
            </view>
            <view class="es-form-item-bottom-line" v-if="
              showItemSplitLine &&
              schemaIndex < formSchemas.length - 1 &&
              formSchemas[schemaIndex + 1].component !== 'SplitLine'
            "></view>
          </picker>
          <!-- ApiSelect 远程单选 -->
          <picker mode="selector" :range-key="formSchema.componentProps?.labelField || 'label'"
            :disabled="formSchema.componentProps?.disabled" :range="formSchema.componentProps?.options" :class="{
              'es-form-item-round-bottom':
                schemaIndex < formSchemas.length - 1 &&
                formSchemas[schemaIndex + 1].component === 'SplitLine',
              'es-form-item-round-top':
                schemaIndex > 0 &&
                formSchemas[schemaIndex - 1].component === 'SplitLine',
            }" class="es-form-item" @change="apiSelectChange($event, formSchema)"
            v-if="formSchema.component === 'ApiSelect'">
            <view class="es-form-item-container">
              <view class="es-form-item-label">
                <text>{{ formSchema.label }}</text>
              </view>
              <view class="es-form-item-content">
                <text class="input" :class="{
                  'input-placeholder': !formData[formSchema.field],
                }">
                  {{ formData[formSchema.field + "__label"] || "请选择" }}
                </text>
              </view>
              <view class="es-form-item-clear-icon">
                <text class="es-icon es-icon-xiangyou"></text>
              </view>
            </view>
            <view class="es-form-item-bottom-line" v-if="
              showItemSplitLine &&
              schemaIndex < formSchemas.length - 1 &&
              formSchemas[schemaIndex + 1].component !== 'SplitLine'
            "></view>
          </picker>

          <!-- Date 日期选择 -->
          <picker mode="date" :disabled="formSchema.componentProps?.disabled" :class="{
            'es-form-item-round-bottom':
              schemaIndex < formSchemas.length - 1 &&
              formSchemas[schemaIndex + 1].component === 'SplitLine',
            'es-form-item-round-top':
              schemaIndex > 0 &&
              formSchemas[schemaIndex - 1].component === 'SplitLine',
          }" class="es-form-item" @change="dateSelectChange($event, formSchema)"
            v-if="formSchema.component === 'Date'">
            <view class="es-form-item-container">
              <view class="es-form-item-label">
                <text>{{ formSchema.label }}</text>
              </view>
              <view class="es-form-item-content">
                <text class="input" :class="{
                  'input-placeholder': !formData[formSchema.field],
                }">
                  {{ formData[formSchema.field] || "请选择" }}
                </text>
              </view>
              <view class="es-form-item-clear-icon">
                <text class="es-icon es-icon-xiangyou"></text>
              </view>
            </view>
            <view class="es-form-item-bottom-line" v-if="
              showItemSplitLine &&
              schemaIndex < formSchemas.length - 1 &&
              formSchemas[schemaIndex + 1].component !== 'SplitLine'
            "></view>
          </picker>

          <!-- CascadeSelect 级联选择 -->
          <view :class="{
            'es-form-item-round-bottom':
              schemaIndex < formSchemas.length - 1 &&
              formSchemas[schemaIndex + 1].component === 'SplitLine',
            'es-form-item-round-top':
              schemaIndex > 0 &&
              formSchemas[schemaIndex - 1].component === 'SplitLine',
          }" class="es-form-item" v-if="
  formSchema.component === 'CascadeSelect' ||
  formSchema.component === 'ApiCascadeSelect'
">
            <view class="es-form-item-container">
              <view class="es-form-item-label">
                <text>{{ formSchema.label || "未知" }}</text>
              </view>
              <view class="es-form-item-content">
                <uniDataPicker :localdata="formSchema.componentProps?.options" :popup-title="
                  formSchema.componentProps?.placeholder || '请选择'
                " v-slot:default="scope" :map="{
  text: formSchema.componentProps?.labelField || 'label',
  value: formSchema.componentProps?.valueField || 'value',
}" @change="uniDataPickerOnchange($event, formSchema)" @nodeclick="uniDataPickerOnnodeclick">
                  <template>
                    <text class="input" :class="{
                      'input-placeholder': !formData[formSchema.field].length,
                    }">
                      {{
                          formData[formSchema.field + "__label"] ||
                          formSchema.componentProps?.placeholder ||
                          "请选择"
                      }}
                    </text>
                  </template>
                </uniDataPicker>
              </view>
              <view class="es-form-item-clear-icon">
                <text class="es-icon es-icon-xiangyou"></text>
              </view>
            </view>
            <view class="es-form-item-bottom-line" v-if="
              showItemSplitLine &&
              schemaIndex < formSchemas.length - 1 &&
              formSchemas[schemaIndex + 1].component !== 'SplitLine'
            "></view>
          </view>
          <!-- Upload 上传 -->
          <view :class="{
            'es-form-item-round-bottom':
              schemaIndex < formSchemas.length - 1 &&
              formSchemas[schemaIndex + 1].component === 'SplitLine',
            'es-form-item-round-top':
              schemaIndex > 0 &&
              formSchemas[schemaIndex - 1].component === 'SplitLine',
          }" class="es-form-item" v-if="formSchema.component === 'Upload'">
            <view class="es-form-item-container">
              <view class="es-form-item-label">
                <text>{{ formSchema.label || "未知" }}</text>
              </view>
              <view class="es-form-item-content">
                <view class="es-form-upload-box">
                  <!-- 默认的图片预览列表 -->
                  <view>
                    <!-- 图片预览插槽 -->
                    <!-- <view
                      v-for="(imgItem, imgIndex) in formData[formSchema.field]"
                      :key="imgIndex"
                    >
                    </view> -->

                    <!-- 默认的图片显示 -->
                    <view v-if="
                      formSchema.componentProps?.uploadProps?.previewSlot
                        ? !!!useSlots()[
                        formSchema.componentProps?.uploadProps
                          ?.previewSlot
                        ]
                        : true
                    ">
                      <view class="es-form-upload-item" v-for="(imgItem, imgIndex) in formData[
                        formSchema.field
                      ]" :style="{
  width:
    (formSchema.componentProps?.uploadProps
      ?.previewWidth || '124') + 'rpx',
  height:
    (formSchema.componentProps?.uploadProps
      ?.previewHeight || '124') + 'rpx',
}" :key="imgIndex">
                        <image @click="
                          uploadImgPreview(formData, formSchema, imgIndex)
                        " mode="aspectFill" class="es-form-upload-item-img" :src="imgItem" />
                        <view class="es-form-upload-close-icon" @click.stop="
                          uploadImgDelete(formData, formSchema, imgIndex)
                        ">
                          <text class="close-icon es-icon es-icon-shanchu"></text>
                        </view>
                      </view>
                    </view>
                  </view>
                  <!-- 上传按钮 -->
                  <view @click="uploadImgchoose(formData, formSchema)" v-if="
                    formData[formSchema.field].length <
                    (formSchema.componentProps?.uploadProps?.maxNum || 9)
                  ">
                    <!-- 上传按钮插槽 -->
                    <slot :name="formSchema.componentProps?.uploadProps?.slot"></slot>
                    <!-- 默认的上传按钮 -->
                    <view class="es-form-upload-btn" v-if="
                      formSchema.componentProps?.uploadProps?.slot
                        ? !!!useSlots()[
                        formSchema.componentProps?.uploadProps?.slot
                        ]
                        : true
                    ">
                      <text class="upload-icon es-icon es-icon-tianjia2"></text>
                    </view>
                  </view>
                </view>
                <view class="es-form-upload-alert-text" v-if="formSchema.componentProps?.uploadProps?.alertText">{{
                    formSchema.componentProps?.uploadProps?.alertText
                }}</view>
              </view>
              <view class="es-form-item-clear-icon" v-if="!formSchema.componentProps?.uploadProps?.hideNum">
                <text class="upload-img-count-text">{{ formData[formSchema.field].length }}/{{
                    formSchema.componentProps?.uploadProps?.maxNum || 9
                }}</text>
              </view>
            </view>
            <view class="es-form-item-bottom-line" v-if="
              showItemSplitLine &&
              schemaIndex < formSchemas.length - 1 &&
              formSchemas[schemaIndex + 1].component !== 'SplitLine'
            "></view>
          </view>
          <!-- 分割线 -->
          <view class="es-form-item-split-line" v-if="formSchema.component === 'SplitLine'"></view>
        </view>
      </view>
      <view class="action-button-group" v-if="showActionButtonGroup">
        <view style="width: 40%">
          <es-button round plain type="primary" block>重置</es-button>
        </view>
        <view style="width: 40%">
          <es-button round type="primary" @click="submitHandle" block>提交</es-button>
        </view>
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
import { keyBy } from "lodash";
import cloneDeep from "lodash/cloneDeep";
import { computed, onMounted, reactive, ref, unref, useSlots, watch } from "vue";
import esButton from "../es-button/index.vue";
import { valueMap } from "./defaultValueMap";
import { useUploadImg } from "./hooks/upload-img";
import { useVerifyCode } from "./hooks/verify-code";
import { formItem, formMethods, formProps } from "./types";
import { visitTree } from "../../utils/index";
const { verifyCodeTimer, getVerifyCode, getVerifyCodeBtnIsLoading } =
  useVerifyCode();
const { uploadImgchoose, uploadImgDelete, uploadImgPreview } = useUploadImg();
// @ts-ignore
import uniDataPicker from "../../uni-components/uni-data-picker/components/uni-data-picker/uni-data-picker.vue";
// 事件
const emit = defineEmits(["register", "submit", "loaded"]);
// 表单数据
const formData = ref<any>({});
// 表单结构
const formSchemas = ref<formItem[]>([]);
const formSchemasMap = computed(() => (keyBy(formSchemas.value, e => e.field) as Record<string, formItem>))
// 表单加载状态
const esFormLoading = ref<boolean>(false);
const esFormError = reactive<{ isError: boolean; errorInfo: any }>({
  isError: false,
  errorInfo: "",
});
const showItemSplitLine = ref<boolean>(true);
// 表单操作按钮组显示状态
const showActionButtonGroup = ref<boolean>(true);
// 级联选项改变事件回调
function uniDataPickerOnchange(even: any, formSchema: formItem) {
  formData.value[formSchema.field + "__label"] = even.detail.value
    .map((item: any) => item.text)
    .join(formSchema?.componentProps?.joinStr || "/");
  formData.value[formSchema.field] = even.detail.value.map(
    (item: any) => item.value
  );
}
// 级联选项点击事件回调
function uniDataPickerOnnodeclick(event: any) {
}
// 单选事件回调
function selectChange(event: any, formSchema: formItem) {
  const { value: selectedIndex } = event.detail;
  const { options } = formSchema.componentProps || [];
  if (options?.length) {
    formData.value[formSchema.field] = options[selectedIndex]["value"];
    formData.value[formSchema.field + "__label"] =
      options[selectedIndex]["label"];
  }
}
// 日期选择 时间回调
function dateSelectChange(event: any, formSchema: formItem) {
  formData.value[formSchema.field] = event.detail.value;
}
// 远程单选事件回调
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
function radioClickHandle(radioIndex: number, formSchema: formItem) {
  if (!formSchema.componentProps || !formSchema.componentProps.options) return;
  formSchema.componentProps.activeIndex = radioIndex;
  formData.value[formSchema.field] =
    formSchema.componentProps.options[radioIndex].value;
}
// 属性设置
async function setProps(props: formProps) {
  showActionButtonGroup.value = props.showActionButtonGroup || false;
  showItemSplitLine.value = props.showItemSplitLine || true;
  try {
    esFormLoading.value = true;
    for (let i = 0; i < props.schemas.length; i++) {
      const schema = props.schemas[i];
      // 初始化字段默认值
      formData.value[schema.field] =
        schema.defaultValue || valueMap[schema.component] || "";
      // 加载ApiSelect选项
      if (schema.component === "ApiSelect") {
        let api = schema.componentProps?.api;
        if (schema.componentProps && api) {
          const res = await api();
          if (schema.componentProps.resultField) {
            schema.componentProps.options =
              res[schema.componentProps.resultField];
          } else {
            schema.componentProps.options =
              res["data"] || res["result"] || res["list"] || res;
          }
        }
      }
      // 加载ApiCascadeSelect选项
      if (schema.component === "ApiCascadeSelect") {
        let api = schema.componentProps?.api;
        if (schema.componentProps && api) {
          const res = await api();
          if (schema.componentProps.resultField) {
            schema.componentProps.options =
              res[schema.componentProps.resultField];
          } else {
            schema.componentProps.options =
              res["data"] || res["result"] || res["list"] || res;
          }
        }
      }

      if (Array.isArray(schema.componentProps?.options)) {
        const cp = schema.componentProps!
        const optMap = {} as Record<string, any>
        visitTree(cp.options!, (e, _i, p) => {
          optMap[e[cp.valueField ?? 'value']] = [...p, e]
        })
        cp.optionsMap = optMap
      }
    }
    esFormLoading.value = false;
    formSchemas.value = props.schemas;
  } catch (error) {
    esFormLoading.value = false;
    esFormError.isError = true;
    esFormError.errorInfo = error;
  }
}
// 清空表单指定字段数据
function clearSchemaData(schema: formItem) {
  formData.value[schema.field] = valueMap[schema.component] || "";
}
// 说明: 获取表单值
function getFieldsValue() {
  let formdata = cloneDeep(formData.value);
  for (const key in formdata) {
    if (key.indexOf("__label") > -1) {
      delete formdata[key];
    }
  }
  return formdata;
}
// 校验整个表单
async function validate(): Promise<boolean> {
  for (let i = 0; i < unref(formSchemas).length; i++) {
    const item = unref(formSchemas)[i];
    if (item.required) {
      if (!formData.value[item.field]) {
        // 需要输入的组件
        let needInputComponents = ["Input", "Textarea"];
        if (needInputComponents.includes(item.component)) {
          uni.showToast({
            title: "请输入" + item.label,
            icon: "none",
          });
          throw "请输入" + item.label;
        }
        // 需要选择的组件
        let needSelectComponents = [
          "Select",
          "Radio",
          "Checkbox",
          "apiSelect",
          "apiCascadeSelect",
        ];
        if (needSelectComponents.includes(item.component)) {
          uni.showToast({
            title: "请选择" + item.label,
            icon: "none",
          });
          throw "请选择" + item.label;
        }
      }
      if (item.component === "Upload") {
        if (!formData.value[item.field].length) {
          throw "请上传" + item.label;
        }
      }
    }
  }
  return true;
}
// 设置表单值
function setFieldsValue(data: any) {
  // formSchemas
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];
      formData.value[key] = value;

      const item = formSchemasMap.value[key]
      if (!item) continue
      const p = item.componentProps

      // 设置 __label 字段
      if (item.component === 'Select' || item.component === 'ApiSelect') {
        const options = p?.optionsMap
        if (!options) continue

        formData.value[`${key}__label`] = options[value]?.[0]?.[p.labelField ?? 'label']
      } else if (item.component === 'CascadeSelect' || item.component === 'ApiCascadeSelect') {
        const options = p?.optionsMap
        if (!options) continue

        formData.value[`${key}__label`] = options[value]?.map((e: any) => e[p.labelField ?? 'label']).join('/')
      }
    }
  }
}

watch(esFormLoading, (v) => {
  if (!v) emit('loaded')
})

onMounted(() => {
  emit("register", {
    setProps,
    getFieldsValue,
    setFieldsValue,
    validate,
  } as formMethods);
});

function submitHandle() {
  emit("submit", getFieldsValue());
}
</script>
<style lang="scss">
.es-form-loading {
  height: 300rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}

.es-form-error {
  color: $uni-color-error;
  text-align: center;
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
      min-height: $es-form-item-height;
      position: relative;
      background-color: #fff;

      .es-form-item-container {
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;

        .es-form-item-label {
          width: 29%;
          height: $es-form-item-height;
          color: $es-form-label-color;
          font-size: $uni-font-size-base;
          display: flex;
          align-items: center;
          align-self: flex-start;
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

          // 上传缩略尺寸
          $upload-item-size: 124rpx;

          .es-form-upload-alert-text {
            color: #d38600;
            font-size: $uni-font-size-base;
            padding-bottom: 20rpx;
          }

          .es-form-upload-box {
            display: flex;
            padding-top: 32rpx;
            padding-bottom: 32rpx;
            flex-wrap: wrap;

            // .es-form-upload-item:first-child {
            //   margin-left: 0;
            // }
            .es-form-upload-item {
              // width: $upload-item-size;
              // height: $upload-item-size;

              border-radius: 20rpx;
              border: 2rpx solid transparent;
              box-sizing: border-box;
              // background-color: #ccc;
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
              margin-left: 12rpx;
              margin-bottom: 12rpx;
              position: relative;

              .es-form-upload-item-img {
                width: 100%;
                height: 100%;
              }

              .es-form-upload-close-icon {
                position: absolute;
                top: 0;
                right: 0;
                width: 40rpx;
                height: 40rpx;
                border-bottom-left-radius: 20rpx;
                background-color: rgba($color: #000000, $alpha: 0.4);
                color: #ffffff;
                display: flex;
                align-items: center;
                justify-content: center;

                .close-icon {
                  font-size: $uni-font-size-sm;
                }
              }
            }

            .es-form-upload-btn {
              width: $upload-item-size;
              height: $upload-item-size;
              border-radius: 20rpx;
              border: 2rpx solid $uni-border-color;
              box-sizing: border-box;
              margin-left: 12rpx;
              // background-color: #ccc;
              display: flex;
              justify-content: center;
              align-items: center;

              .upload-icon {
                color: $uni-border-color;
                font-size: $uni-font-size-title;
              }

              box-sizing: border-box;
            }
          }
        }

        .es-form-item-content.es-form-item-content-verify-code {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 69%;

          .input {
            width: 200rpx;
          }
        }

        .es-form-item-content.radio-container {
          display: flex;

          .radio-item {
            display: flex;
            align-items: center;
            margin-right: 34rpx;

            .-icon {
              margin-right: 10rpx;
              width: 36rpx;
              height: 36rpx;
              border: 4rpx solid #777777;
              // background-color: #ccc;
              border-radius: 50%;
              position: relative;
              transition: 0.3s;
            }

            .-icon::after {
              content: "";
              transition: 0.3s;
              display: block;
              width: 0rpx;
              height: 0rpx;
              border-radius: 50%;
              background-color: transparent;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }

            .-label {
              font-size: 32rpx;
            }
          }

          .radio-item.active {
            .-icon {
              border: 4rpx solid $primary-color;
            }

            .-icon::after {
              width: 24rpx;
              height: 24rpx;
              background-color: $primary-color;
            }
          }
        }

        .es-form-item-clear-icon {
          width: $es-form-item-height;
          height: $es-form-item-height;
          align-self: flex-start;
          width: 9%;
          display: flex;
          justify-content: center;
          align-items: center;

          .upload-img-count-text {
            font-size: $uni-font-size-sm;
            color: $uni-color-subtitle;
          }

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
        width: calc(100% - 68rpx);
        margin-left: 34rpx;
        height: 1px;
        bottom: 1px;
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
