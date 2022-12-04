import React from "react";

import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  UsergroupAddOutlined,
  SolutionOutlined,
  AlertOutlined,
} from "@ant-design/icons";

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
            <Link to="/">HomePage</Link>
          </Menu.Item>
          {/* role admin */}
          <Menu.Item key="/admin/list-doctors" icon={<UsergroupAddOutlined />}>
            <Link to="/admin/list-doctors">Doctors</Link>
          </Menu.Item>
          <Menu.Item
            key="/admin/list-specializations"
            icon={<SolutionOutlined />}
          >
            <Link to="/admin/list-specializations">Specializations</Link>
          </Menu.Item>
          <Menu.Item key="/admin/list-clinics" icon={<AlertOutlined />}>
            <Link to="/admin/list-clinics">Clinics</Link>
          </Menu.Item>
          {/* Role */}
          <Menu.Item key="/doctor" icon={<HomeOutlined />}>
            <Link to="/doctor">Doctor</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}

export default SiderComponent;
