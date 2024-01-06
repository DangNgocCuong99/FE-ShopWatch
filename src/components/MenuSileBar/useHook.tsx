import { useDispatch } from "react-redux";
import { useState } from "react";
import { matchPath, useNavigate } from "react-router-dom";

import appRoutes from "/@/router/appRouter";
import { flattenArrayAndModifyPath } from "/@/router/hook";
import { setKeyMenu } from "/@/stores/multipleTab/multipleTabReduce";

import { MenuItem } from "./types";

export const useMenuNavigation = () => {
  const dispatch = useDispatch();
  const [selectedKey, setSelectedKey] = useState([""]);
  const [openKeys, setOpenKeys] = useState([""]);
  const navigation = useNavigate();

  const handleFindRoute = (pathRoute: string) => {
    for (const item of flattenArrayAndModifyPath(appRoutes)) {
      const path = matchPath(item.path, pathRoute)?.pattern.path;
      if (path) {
        return item;
      }
    }
  };

  const handleChangePage = (pathname: string) => {
    const pathParent = handleFindRoute(pathname)?.parent;
    if (pathParent) {
      setSelectedKey([pathname, pathParent]);
      setOpenKeys([pathParent]);
    } else {
      setSelectedKey([pathname]);
      setOpenKeys([""]);
    }
  };
  const handleNavigation = (path: string) => {
    dispatch(setKeyMenu(path));
    navigation(path);
  };

  const getItem = (
    label: React.ReactNode,
    key: React.ReactNode,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem => {
    return {
      label,
      key,
      icon,
      children,
    } as MenuItem;
  };

  const items: MenuItem[] = appRoutes.map((item) => {
    if (!item.child || item.child.every((i) => !!i.hiddenMenu != false)) {
      if (item.hiddenMenu) {
        return null;
      }
      const label = <div>{item.displayText}</div>;
      const key = item.path;
      const icon = item?.icon;
      return getItem(label, key, icon);
    } else {
      const data: {
        label: string | undefined;
        path: string | undefined;
        icon: React.ReactNode;
        hiddenMenu: boolean;
      }[] = [];
      for (const child of item.child) {
        data.push({
          label: child.displayText,
          path: `${item.path}/${child.path}`,
          icon: child?.icon,
          hiddenMenu: !!child.hiddenMenu,
        });
      }
      const label = <div>{item.displayText}</div>;
      const key = item.path;
      const icon = item?.icon;
      const children = data.map((itemChild) => {
        if (itemChild.hiddenMenu) {
          return null;
        }
        const keyChild = itemChild.path;
        const labelChild = <div>{itemChild.label}</div>;
        const iconChild = itemChild?.icon;
        return getItem(labelChild, keyChild, iconChild);
      });
      return getItem(label, key, icon, children);
    }
  });

  return {
    selectedKey,
    setSelectedKey,
    openKeys,
    setOpenKeys,
    handleChangePage,
    handleNavigation,
    items,
    handleFindRoute,
  };
};
