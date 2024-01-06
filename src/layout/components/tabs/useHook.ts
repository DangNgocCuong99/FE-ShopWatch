import { useRef, useState } from "react";
import { TabPaneProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { last } from "lodash-es";

import { IRoute } from "/@/router/hook";
import {
  selectMultipleTab,
  setTabList,
  setKeyTab,
  setKeyMenu,
} from "../../../stores/multipleTab/multipleTabReduce";

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;
export interface Tab extends Omit<TabPaneProps, "tab"> {
  key: string;
  label: React.ReactNode;
}

export const useMenuTab = () => {
  const [items, setItems] = useState<Tab[]>([]);
  const [route, setRoute] = useState<IRoute>();
  const newTabIndex = useRef(0);

  const dispatch = useDispatch();
  const stateSystem = useSelector(selectMultipleTab);

  const add = async (route: IRoute) => {
    if (route) {
      const newActiveKey = `newTab${newTabIndex.current++}:${route.path}`;
      const newItems = [
        ...getItem(),
        {
          label: route.displayText,
          children: route.element,
          key: newActiveKey,
        },
      ];
      dispatch(setKeyTab(newActiveKey));
      dispatch(setTabList(newItems.map((i) => i.key)));
      setItems(newItems);
    }
  };

  const getItem = () => {
    return items.filter((i) => stateSystem.tabList.includes(i.key));
  };

  const remove = (targetKey: TargetKey) => {
    const targetIndex = getItem().findIndex((pane) => pane.key === targetKey);
    const newPanes = getItem().filter((pane) => pane.key !== targetKey);
    dispatch(setTabList(stateSystem.tabList.filter((i) => i !== targetKey)));
    if (newPanes.length && targetKey === stateSystem.keyTab) {
      const { key } =
        newPanes[
          targetIndex === newPanes.length ? targetIndex - 1 : targetIndex
        ];
      onChange(key);
      setItems(newPanes);
    } else {
      const index = stateSystem.tabList.findIndex((i) => i === targetKey);
      if (
        index > 0 &&
        targetKey === stateSystem.keyTab &&
        targetKey === last(stateSystem.tabList)
      ) {
        onChange(stateSystem.tabList[index - 1]);
      } else {
        if (targetKey === stateSystem.keyTab) {
          onChange(stateSystem.tabList[index + 1]);
        }
      }
    }
  };

  const onEdit = (targetKey: TargetKey, action: "add" | "remove") => {
    if (action === "add" && route) {
      add(route);
    } else {
      remove(targetKey);
    }
  };

  const navigation = useNavigate();

  const onChange = (key?: string) => {
    if (!!key) {
      dispatch(setKeyTab(key));
      dispatch(setKeyMenu(key));
      navigation(key.split(":")[1]);
    } else {
      navigation("/manage");
    }
  };

  const handleCloseTab = () => {
    const keyTab = stateSystem.keyTab;
    if (keyTab) {
      remove(keyTab);
    }
  };

  return {
    activeKey: stateSystem.keyTab,
    items,
    setItems,
    route,
    setRoute,
    newTabIndex,
    onChange,
    onEdit,
    add,
    remove,
    handleCloseTab,
    getItem,
    tabList: stateSystem.tabList,
    keyMenu: stateSystem.keyMenu,
    setKeyMenu: (key: string) => dispatch(setKeyMenu(key)),
  };
};
