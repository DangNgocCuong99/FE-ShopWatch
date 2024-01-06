import React from "react";
import { t } from "i18next";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import { SettingOutlined } from "@ant-design/icons";

import { useRedirect } from "../useRedirect";

const LayoutHeader = () => {
  const { goAvatar, goChangePassword, goProfile, logout } = useRedirect();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div onClick={() => goProfile()}>{t("layout.header.profile")}</div>
      ),
    },
    {
      key: "2",
      label: <div onClick={() => goAvatar()}>{t("layout.header.avatar")}</div>,
    },
    {
      key: "3",
      label: (
        <div onClick={() => goChangePassword()}>
          {t("layout.header.change_password")}
        </div>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "4",
      label: <div onClick={() => logout()}>{t("layout.header.logout")}</div>,
    },
  ];

  return (
    <Dropdown menu={{ items }} arrow>
      <Button type="text" icon={<SettingOutlined />} />
    </Dropdown>
  );
};
export default LayoutHeader;
