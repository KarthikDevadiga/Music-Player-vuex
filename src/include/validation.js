// prettier-ignore
import {
  Form as VeeForm,
  Field as VeeField,
  defineRule, ErrorMessage,
} from 'vee-validate';
import {
  required,
  min_value as minValue,
  max_value as maxValue,
  alpha_spaces as alphaSpace,
  integer,
  email,
  confirmed,
} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);
    defineRule('required', required);
    defineRule('minValue', minValue);
    defineRule('alphaSpace', alphaSpace);
    defineRule('integer', integer);
    defineRule('email', email);
    defineRule('maxValue', maxValue);
    defineRule('confiremed', confirmed);
  },
};
