export interface IBaseSearchListQueryParams {
  timKiemNhanh?: string;
  page?: number;
  pageSize?: number;
  isFetchAll?: boolean;
}

export interface BasePagination<T = any> extends BaseInfo<{
  items: T[];
  total: number;
}> {
  items: any;
  total(total: any): unknown;
}

export enum Domain {
  ITEM = "/ITEM",
}

export interface BaseInfo<T> {
  data: T,
  status: boolean,
  message: string,
}
