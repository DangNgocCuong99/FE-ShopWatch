import { ReactNode } from "react";

export type RouteType = {
  element?: ReactNode;
  state?: string;
  index?: boolean;
  path: string;
  child?: RouteType[];
  displayText: string;
  icon?: ReactNode;
  hiddenMenu?: boolean;
  isOpen?: boolean;
};
