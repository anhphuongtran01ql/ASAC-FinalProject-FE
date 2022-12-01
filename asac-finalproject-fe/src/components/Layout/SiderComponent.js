import React from "react";

import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import {useNavigate} from "react-router";

const { Sider } = Layout;

function SiderComponent() {
  let navigate = useNavigate()
  return (
    <>
      <Sider breakpoint="lg">
        <div className="logo" />
        <Menu theme="dark" mode="vertical" defaultSelectedKeys={["admin/login"]}>
          <Menu.Item key="/login"  icon={<HomeOutlined />}>
            <Link to="admin/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}

export default SiderComponent;
