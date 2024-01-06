import { cloneDeep ,isObject} from 'lodash-es';

import { ActionItem } from "./types/tableAction";

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  const res: any = cloneDeep(src);
  for (key in target) {
    res[key] = isObject(res[key]) ? deepMerge(res[key], target[key]) : (res[key] = target[key]);
  }
  return res;
}

class TableActionsBuilder {
  private actions: ActionItem[] = [];

  constructor() {}

  addView(action?: ActionItem) {
    this.actions.push(
      deepMerge(
        {
          icon: 'ant-design:eye-outlined',
          tooltip: "chi tiet",
          color: 'primary',
        },
        action,
      ),
    );

    return this;
  }

  addEdit(action?: ActionItem) {
    this.actions.push(
      deepMerge(
        {
          icon: 'ant-design:edit-outlined',
          tooltip: "edit",
        },
        action,
      ),
    );
    return this;
  }

  addRemove(onConfirm?: Function, action?: ActionItem) {
    this.actions.push(
      deepMerge(
        {
          icon: 'ant-design:delete-outlined',
          color: 'danger',
          tooltip: "xoa",
          popConfirm: {
            title:"Xac Nhan",
            description: "ban co chac muon xoa",
            placement: 'bottomRight',
            confirm: onConfirm,
          },
        } as ActionItem,
        action,
      ),
    );
    return this;
  }

  addAction(action: ActionItem) {
    this.actions.push(action);
    return this;
  }

  build(): ActionItem[] {
    return this.actions;
  }
}

export function useTableActionsBuilder() {
  const builder = new TableActionsBuilder();

  return [builder];
}
