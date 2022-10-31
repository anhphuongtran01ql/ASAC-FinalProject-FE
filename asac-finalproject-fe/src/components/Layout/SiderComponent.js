import React from "react";

import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const { Sider } = Layout;

function SiderComponent() {
  return (
    <>
      <Sider breakpoint="lg">
        <div className="logo" />
        <Menu theme="dark" mode="vertical" defaultSelectedKeys={["/"]}>
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to="/">Homepage</Link>
          </Menu.Item>
          <Menu.Item key="/login" icon={<HomeOutlined />}>
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}

export default SiderComponent;
