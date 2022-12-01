import React from "react";
import "../user.css";

import { Table, Button, Space, Col, Row } from "antd";
import DoctorDetails from "./detail";
import EditDoctorInfo from "./edit";
import DeleteADoctor from "./delete";
import CreateADoctor from "./create";
const { Column } = Table;

const data = [
  {
    key: "1",
    name: "Mike",
    email: "mike@gmail.com",
    phone: "123456789",
    specialization: "123445",
  },
  {
    key: "2",
    name: "John",
    email: "john@gmail.com",
    phone: "123456789",
    specialization: "123445",
  },
];

function NameOfTable() {
  return (
    <>
      <Row className="table-name-container" justify="space-between">
        <Col className="table-name-col" xs={21} sm={20}>
          <p className="table-name-text">DOCTORS</p>
        </Col>
        <Col className="table-name-col">
          <Space>
            <CreateADoctor />
          </Space>
        </Col>
      </Row>
    </>
  );
}

function ListOfDoctors() {
  return (
    <>
      <NameOfTable />
      <Table dataSource={data} bordered="true">
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column
          title="Specialization"
          dataIndex="specialization"
          key="specialization"
        />
        <Column
          title="Action"
          key="action"
          render={(record) => (
            <div className="button-group">
              <DoctorDetails />
              <EditDoctorInfo />
              <DeleteADoctor />
            </div>
          )}
        />
      </Table>
    </>
  );
}
export default ListOfDoctors;
