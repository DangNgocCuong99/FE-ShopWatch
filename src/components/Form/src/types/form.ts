import { RuleObject } from 'antd/es/form';
import { NamePath } from 'antd/es/form/interface';

import { Recordable } from '/@/utils';

import { ColEx, ComponentType } from './index';

export type Rule = RuleObject & {
    trigger?: 'blur' | 'change' | ['change', 'blur'];
};


export interface FormSchema {
    label: string,
    field: NamePath,
    rules?: Rule[],
    component?: ComponentType,
    disabled?: boolean,
    defaultValue?: string | number;
    colProps?: Partial<ColEx>,
    componentProps?: Recordable
}

export interface FormSchemaModel<T> extends FormSchema {
    field: Extract<keyof T, string>;
}