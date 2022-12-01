import React from "react";
import { Descriptions, Badge, Button } from "antd";
import { Link } from "react-router-dom";
import { ProfileOutlined } from "@ant-design/icons";
import "../user.css";
export function DoctorInfo() {
  return (
    <>
      <div className="doctor-info-container">
        <Descriptions
          className="doctor-info-descriptions"
          title="Doctor Info"
          layout="horizontal"
          column={{ xxl: 2, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
          size="middle"
          bordered
        >
          <Descriptions.Item label="ID">1</Descriptions.Item>
          <Descriptions.Item label="Name">Mike</Descriptions.Item>
          <Descriptions.Item label="Email">mike@gmail.com</Descriptions.Item>
          <Descriptions.Item label="Address">112 The Lam Son</Descriptions.Item>
          <Descriptions.Item label="Phone">123456789</Descriptions.Item>
          <Descriptions.Item label="Gender">Male</Descriptions.Item>
          <Descriptions.Item label="Specialization">$80.00</Descriptions.Item>
          <Descriptions.Item label="Description" span={3}>
            Data disk type: MongoDB
          </Descriptions.Item>
        </Descriptions>
      </div>
    </>
  );
}

function DoctorDetails() {
  return (
    <>
      <Link to="/admin/list-doctors/doctor-info">
        <Button
          className="button-detail"
          type="link"
          icon={<ProfileOutlined />}
        >
          Detail
        </Button>
      </Link>
    </>
  );
}

export default DoctorDetails;
