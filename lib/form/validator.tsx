import {FormValue} from './form';

interface FormRule {
    key: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
}

type FormRules = FormRule[];

interface FormErrors {
    [key: string]: string[];
}

function isEmpty(v: any) {
    return v == null || v === '';
}

export function noErrors(errors: FormErrors) {
    return Object.keys(errors).length === 0;
}

const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
    const errors: FormErrors = {};
    const addError = (key:string, message: string) => {
        errors[key] = (errors[key] || []).concat(message);
    };
    rules.map((rule) => {
        const value = formValue[rule.key];
        if (rule.required) {
            if (isEmpty(value)) {
                addError(rule.key, '必填');
            }
        }
        if (rule.minLength) {
            if (!isEmpty(value) && value.length < rule.minLength) {
                addError(rule.key, '不够长');
            }
        }
        if (rule.maxLength) {
            if (!isEmpty(value) && value.length > rule.maxLength) {
                addError(rule.key, '太长');
            }
        }
        if (rule.pattern) {
            if (!(rule.pattern.test(value))) {
                addError(rule.key, '格式不对');
            }
        }
    });

    return errors;
};

export default Validator;
