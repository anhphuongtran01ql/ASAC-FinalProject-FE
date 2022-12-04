import React from "react";
import "../user.css";
import { Table, Space, Col, Row } from "antd";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../General/Loading";
import { fetchAllClinics } from "../../Services/Clinic/clinicService";
import DeleteAClinic from "./delete";
import ClinicDetailInfo from "./detail";
import CreateAClinic from "./create";
import EditClinic from "./edit";
const { Column } = Table;

function NameOfTable() {
  return (
    <>
      <Row className="table-name-container" justify="space-between">
        <Col className="table-name-col" xs={21} sm={20}>
          <p className="table-name-text">CLINICS</p>
        </Col>
        <Col className="table-name-col">
          <Space>
            <CreateAClinic />
          </Space>
        </Col>
      </Row>
    </>
  );
}

function ListOfClinics() {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["clinics"],
    queryFn: () => fetchAllClinics(),
  });

  return (
    <>
      <NameOfTable />
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        <Table dataSource={data} bordered="true">
          <Column title="Name" dataIndex="name" key="name" />
          <Column title="Phone" dataIndex="phone" key="phone" />
          <Column
            title="Action"
            key="action"
            render={(record) => (
              <div className="button-group">
                <ClinicDetailInfo clinicId={record.id} />
                <EditClinic clinicId={record.id} />
                <DeleteAClinic clinicId={record.id} />
              </div>
            )}
          />
        </Table>
      )}
    </>
  );
}

export default ListOfClinics;
