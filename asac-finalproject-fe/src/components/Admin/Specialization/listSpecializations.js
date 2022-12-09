import React from "react";
import "../user.css";
import { Table, Space, Col, Row } from "antd";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../General/Loading";
import { fetchAllSpecializations } from "../../Services/Specialization/specializationService";
import SpecializationsDetailInfo from "./detail";
import EditSpecialization from "./edit";
import CreateASpecialization from "./create";
import DeleteASpecialization from "./delete";
const { Column } = Table;

function NameOfTable() {
  return (
    <>
      <Row className="table-name-container" justify="space-between">
        <Col className="table-name-col" xs={21} sm={20}>
          <p className="table-name-text">SPECIALIZATIONS</p>
        </Col>
        <Col className="table-name-col">
          <Space>
            <CreateASpecialization />
          </Space>
        </Col>
      </Row>
    </>
  );
}

function ListOfSpecializations() {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["specializations"],
    queryFn: () => fetchAllSpecializations(),
  });

  return (
    <>
      <NameOfTable />
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        <Table
          dataSource={data}
          bordered="true"
          scroll={{ x: 300 }}
          rowKey="doctorId"
        >
          <Column title="Name" dataIndex="name" key="name" />
          <Column
            title="Action"
            key="action"
            render={(record) => (
              <div key="button-group" className="button-group">
                <SpecializationsDetailInfo specializationId={record.id} />
                <EditSpecialization specializationId={record.id} />
                <DeleteASpecialization specializationId={record.id} />
              </div>
            )}
          />
        </Table>
      )}
    </>
  );
}
export default ListOfSpecializations;
