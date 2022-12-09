import React from "react";
import "../user.css";
import { Space, Col, Row, List, Button } from "antd";
import CreateASchedule from "./create";
import { fetchAllSchedules } from "../../Services/Schedule/scheduleService";
import { useQuery } from "@tanstack/react-query";
import EditSchedule from "./edit";
import DeleteASchedule from "./delete";
import Loading from "../../General/Loading";

function NameOfTable() {
  return (
    <>
      <Row className="table-name-container" justify="space-between">
        <Col className="table-name-col" xs={21} sm={20}>
          <p className="table-name-text">SCHEDULES</p>
        </Col>
        <Col className="table-name-col">
          <Space>
            <CreateASchedule />
          </Space>
        </Col>
      </Row>
    </>
  );
}

function ListOfSchedules() {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["schedules"],
    queryFn: () => fetchAllSchedules(),
  });

  return (
    <>
      <NameOfTable />
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        <List
          scroll={{ x: 300 }}
          rowKey="doctorId"
          bordered
          className="list-schedules"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              className="list-item-schedule"
              actions={[
                <EditSchedule scheduleId={item.id} />,
                <DeleteASchedule scheduleId={item.id} />,
              ]}
            >
              <List.Item.Meta
                title={
                  <h1>
                    <b>Doctor {item.doctorId}: </b> {item.doctorName}
                  </h1>
                }
                description={
                  <>
                    <div>
                      <b>Date:</b>{" "}
                      {new Date(item.date).toLocaleDateString("vi")}
                    </div>
                    <div>
                      <b>Schedule:</b>
                      {JSON.parse(item.time).map((s) => {
                        return <Button type="link">{s.time}</Button>;
                      })}
                    </div>
                  </>
                }
              />
            </List.Item>
          )}
        />
      )}
    </>
  );
}

export default ListOfSchedules;
