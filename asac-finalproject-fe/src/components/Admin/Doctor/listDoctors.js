import React from "react";
import "../user.css";

import { Table, Space, Col, Row, List, Typography } from "antd";
import DoctorDetails from "./detail";
import EditDoctorInfo from "./edit";
import DeleteADoctor from "./delete";
import CreateADoctor from "./create";
import { useQuery } from "@tanstack/react-query";
import { fetchAllDoctors } from "../../Services/Doctor/doctorService";
import Loading from "../../General/Loading";
import { fetchAllSupporters } from "../../Services/Supporter/supporterService";
const { Column } = Table;

function NameOfTable() {
  return (
    <>
      <Row className="table-name-container" justify="space-between">
        <Col className="table-name-col" xs={21} sm={20}>
          <p className="table-name-text">USERS</p>
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
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["doctors"],
    queryFn: () => fetchAllDoctors(),
  });

  const {
    data: supporters,
    isSupportersLoading,
    isSupportersFetching,
  } = useQuery({
    queryKey: ["supporters"],
    queryFn: () => fetchAllSupporters(),
  });

  return (
    <>
      <NameOfTable />
      {isLoading ||
      isSupportersLoading ||
      isFetching ||
      isSupportersFetching ? (
        <Loading />
      ) : (
        <>
          <List
            rowKey="supporterId"
            className="list-supporter-container"
            header={
              <h2 className="list-supporters-header">List Of Supporters</h2>
            }
            itemLayout="horizontal"
            dataSource={supporters}
            renderItem={(item) => (
              <List.Item
                className="list-item-schedule"
                actions={[<DeleteADoctor doctorId={item.id} />]}
              >
                <List.Item.Meta
                  title={
                    <>
                      <Typography.Text mark>[SUPPORTER]</Typography.Text>{" "}
                      {item.name}
                    </>
                  }
                  description={
                    <>
                      <div>{item.email}</div>
                      <div>{item.phone}</div>
                    </>
                  }
                />
              </List.Item>
            )}
          />

          <div className="list-doctor-container">
            <h2 className="list-doctor-heading2">List Of Doctors</h2>
            <Table
              className="list-doctor-table"
              dataSource={data}
              scroll={{ x: 300 }}
              rowKey="doctorId"
            >
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
                    <DoctorDetails doctorId={record.id} />
                    <EditDoctorInfo doctorId={record.id} />
                    <DeleteADoctor doctorId={record.id} />
                  </div>
                )}
              />
            </Table>
          </div>
        </>
      )}
    </>
  );
}
export default ListOfDoctors;
