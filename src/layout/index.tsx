import React from "react";
import { Layout } from "antd";

import MenuSideBar from "../components/MenuSileBar/index";
import { TabMenu, LayoutAvatar, LayoutHeader } from "./components";
import "./index.css";

const { Content, Sider, Header } = Layout;

const LayoutDefault: React.FC = () => {
  return (
    <Layout className="layout-style">
      <Sider className="sider-style">
        <LayoutAvatar />
        <MenuSideBar />
      </Sider>
      <Layout>
        <Header className="layout-header">
          <LayoutHeader />
        </Header>
        <Content className="layout-content-style">
          <TabMenu />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutDefault;
