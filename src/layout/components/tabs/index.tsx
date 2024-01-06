import { Tabs } from "antd";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useMenuNavigation } from "/@/components/MenuSileBar/useHook";

import { useMenuTab } from "./useHook";
import "./index.css";

function TabMenu() {
  const location = useLocation();
  const {
    activeKey,
    setRoute,
    onChange,
    onEdit,
    add,
    getItem,
    tabList,
    keyMenu,
    setKeyMenu,
  } = useMenuTab();
  const { handleFindRoute } = useMenuNavigation();

  useEffect(() => {
    if (tabList.find((i) => i === keyMenu)) {
      setKeyMenu("");
      return;
    }
    if (location.pathname !== "/manage") {
      const routePath = handleFindRoute(location.pathname);
      if (routePath) {
        setRoute({
          ...routePath,
          path: location.pathname,
        });
        add({
          ...routePath,
          path: location.pathname,
        });
      }
    }
  }, [location.pathname]);

  return (
    <Tabs
      hideAdd
      onChange={onChange}
      activeKey={activeKey}
      type="editable-card"
      onEdit={onEdit}
      items={getItem()}
    />
  );
}

export default TabMenu;
