import React from "react";
import "../user.css";

import { Table, Space, Col, Row } from "antd";
import DoctorDetails from "./detail";
import EditDoctorInfo from "./edit";
import DeleteADoctor from "./delete";
import CreateADoctor from "./create";
import { useQuery } from "@tanstack/react-query";
import { fetchAllDoctors } from "../../Services/Doctor/doctorService";
import Loading from "../../General/Loading";
const { Column } = Table;

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
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["doctors"],
    queryFn: () => fetchAllDoctors(),
  });

  return (
    <>
      <NameOfTable />
      {isLoading || isFetching ? (
        <Loading />
      ) : (
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
                <DoctorDetails doctorId={record.id} />
                <EditDoctorInfo doctorId={record.id} />
                <DeleteADoctor doctorId={record.id} />
              </div>
            )}
          />
        </Table>
      )}
    </>
  );
}
export default ListOfDoctors;
