import { ButtonProps } from 'antd';

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}
type RenderFunction = ()=> React.ReactNode 

export interface ActionItem extends ButtonProps {
  onClick?: Fn;
  label?: string;
  color?: string;
  icon?: string;
  popConfirm?: PopConfirm;
  disabled?: boolean;
  divider?: boolean;
  ifShow?: boolean | ((action: ActionItem) => boolean);
  tooltip?: React.ReactNode | RenderFunction ;
}

export interface PopConfirm {
  title: string;
  description:string;
  okText?: string;
  cancelText?: string;
  confirm?: Fn;
  cancel?: Fn;
  icon?: string;
  placement?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'leftTop'
    | 'leftBottom'
    | 'rightTop'
    | 'rightBottom'
    | 'bottomLeft'
    | 'bottomRight';
}
