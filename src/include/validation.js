// prettier-ignore
import {
  Form as VeeForm,
  Field as VeeField,
  defineRule, ErrorMessage,
  configure,
} from 'vee-validate';
import {
  required,
  min_value as minValue,
  max_value as maxValue,
  alpha_spaces as alphaSpace,
  integer,
  email,
  confirmed,
  length,
} from '@vee-validate/rules';

export default {
  install(app) {
    // Whenever you call Vue.use the install function will be called.
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
    defineRule('length', length);
    defineRule('purpose', required); // adding custome message

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is Empty.`,
          length: `Minimum length must be 5`,
          purpose: 'please select your role',
        };
        const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : `Not valid`;
        return message;
      },
    });
  },
};
