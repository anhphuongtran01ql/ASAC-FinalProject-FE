import React from "react";

import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { HomeOutlined, UsergroupAddOutlined } from "@ant-design/icons";

const { Sider } = Layout;

function SiderComponent() {
  let location = useLocation();
  return (
    <>
      <Sider breakpoint="lg">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={["/"]}
          selectedKeys={[location.pathname]}
        >
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to="/">Homepage</Link>
          </Menu.Item>
          <Menu.Item key="/list-doctors" icon={<UsergroupAddOutlined />}>
            <Link to="/list-doctors">Doctors</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}

export default SiderComponent;
