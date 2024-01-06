import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { first, last } from "lodash-es";
import { MenuInfo } from "rc-menu/lib/interface";

import { useMenuTab } from "/@/layout/components/tabs/useHook";

import { useMenuNavigation } from "./useHook";

const MenuSideBar: React.FC = () => {

  const location = useLocation()
  const {
    selectedKey,
    openKeys,
    setOpenKeys,
    handleChangePage,
    items
  } = useMenuNavigation();
  const navigation = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/manage") {
      handleChangePage(location.pathname)
    }else {
      navigation(`${first(items)!.key}`)
    }
  }, [location.pathname]);
  const handleClick = (value: MenuInfo) => {
    navigation(value.key)
  };

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = last(keys);
    if (latestOpenKey) {
      setOpenKeys(keys);
    } else {
      setOpenKeys([""]);
    }
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      items={items}
      onClick={(e) => handleClick(e)}
      selectedKeys={selectedKey}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
    />
  );
};

export default MenuSideBar;
