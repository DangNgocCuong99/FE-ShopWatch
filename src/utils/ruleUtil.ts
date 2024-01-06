import { RuleObject } from "antd/es/form";
import { StoreValue, } from "antd/es/form/interface";
import { isNumber } from "lodash-es";

import { Rule } from "/@/components/Form/src/types/form";

import { ONLY_CHARACTER, ONLY_NUMBER, SO_DIEN_THOAI, SO_DINH_DANH_CA_NHAN } from "./regexPattern";

interface IRuleOptions extends Pick<Rule, 'trigger'> {
    message: string;
  }
  

  export function regexOnlyCharacter(message = 'Không chứa số và kí tự đặc biệt') {
    return {
      pattern: RegExp(ONLY_CHARACTER),
      message: message,
    };
  }
  
  export function regexSoDinhDanhCaNhan(message = 'Số định danh bao gồm 8, 9, 12 kí tự và không chứa kí tự đặc biệt') {
    return {
      pattern: RegExp(SO_DINH_DANH_CA_NHAN),
      message: message,
    };
  }

  export function regexSoDienThoai(message = 'Số điện thoại không hợp lệ') {
    return {
      pattern: RegExp(SO_DIEN_THOAI),
      message: message,
    };
  }
  
  export function regexOnlyNumber(message = 'Sai định dạng số') {
    return {
      pattern: RegExp(ONLY_NUMBER),
      message: message,
    };
  }
  
  export function isEmail(field = 'Email'): Rule {
    return {
      type: 'email',
      message: `${field} không hợp lệ`,
    };
  }
  
  export function isRequired(field?: string): Rule {
    return {
      required: true,
      message: `Vui lòng nhập ${field}`,
    };
  }


export const maxLength = (
  maxVal: number,
  field: string,
  transform?: (value: StoreValue) => StoreValue
) => {
  return {
    max: maxVal,
    message: `${field} tối đa ${maxVal} kí tự`,
    transform,
  };
};

export const minLength = (
    minVal: number,
    field: string,
    options: IRuleOptions = {
      trigger: 'change',
      message: `${field} phải có ít nhất ${minVal} kí tự`,
    },
  ): Rule => ({
    trigger: options.trigger,
    validator: async (_: RuleObject, value: string) => {
      if (value && value.length < minVal) {
        return Promise.reject(options.message);
      }
      return Promise.resolve();
    },
  });


  export const minNumber = (
    minVal: number,
    field: string,
    unit?: string,
    options: IRuleOptions = {
      trigger: 'change',
      message: `${field} phải lớn hơn ${minVal} ${unit}`,
    },
  ): Rule => ({
    trigger: options.trigger,
    transform(value: string | number) {
      if (isNumber(value)) return value;
      return parseInt(value);
    },
    validator: async (_: RuleObject, value: number) => {
      if (value <= minVal) {
        return Promise.reject(options.message);
      }
      return Promise.resolve();
    },
  });
  
  export const maxNumber = (
    maxVal: number,
    field: string,
    unit?: string,
    options: IRuleOptions = {
      trigger: 'change',
      message: `${field} tối đa ${maxVal} ${unit}`,
    },
  ): Rule => ({
    trigger: options.trigger,
    transform(value: string | number) {
      if (isNumber(value)) return value;
      return parseInt(value);
    },
    validator: async (_: RuleObject, value: number) => {
      if (value > maxVal) {
        return Promise.reject(options.message);
      }
      return Promise.resolve();
    },
  });