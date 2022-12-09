import React from "react";

import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  UsergroupAddOutlined,
  SolutionOutlined,
  AlertOutlined,
  ScheduleOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import "./layout.css";

const { Sider } = Layout;

function SiderComponent() {
  let location = useLocation();
  return (
    <>
      <Sider breakpoint="lg" className="sider-layout">
        <div className="logo" />
        <Menu
          className="menu-layout"
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={["/"]}
          selectedKeys={[location.pathname]}
        >
          <Menu.Item key="/admin" icon={<HomeOutlined />}>
            <Link to="/admin">Homepage</Link>
          </Menu.Item>
          {/* role admin */}
          <Menu.Item key="/admin/list-users" icon={<UsergroupAddOutlined />}>
            <Link to="/admin/list-users">Users</Link>
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
          <Menu.Item key="/admin/list-schedules" icon={<ScheduleOutlined />}>
            <Link to="/admin/list-schedules">Schedules</Link>
          </Menu.Item>

          {/* role supporter */}
          <Menu.Item key="/supporter/list-patients" icon={<SnippetsOutlined />}>
            <Link to="/supporter/list-patients">Appointments</Link>
          </Menu.Item>
          {/* role doctor */}
          <Menu.Item key="/doctor/list-patients" icon={<SnippetsOutlined />}>
            <Link to="/doctor/list-patients">Appointments</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}

export default SiderComponent;
