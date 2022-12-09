import React from "react";
import "../Admin/user.css";
import { Table } from "antd";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/General/Loading";
import PatientDetailInfo from "./detail";
import { fetchAllPatients } from "../Services/Supporter/patientService";
import ChangeStatusPatients from "./change";

const { Column } = Table;

function ListOfPatients() {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["patients"],
    queryFn: () => fetchAllPatients(),
  });
  console.log("data", data);

  return (
    <>
      <p className="table-name-text" style={{ marginBottom: "20px" }}>
        Appointments
      </p>
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        <Table
          dataSource={data}
          bordered="true"
          scroll={{ x: 300 }}
          rowKey="appointmentId"
        >
          <Column title="Email" dataIndex="email" key="email" />
          <Column title="Doctor" dataIndex="doctorName" key="doctorName" />
          <Column title="Status" dataIndex="statusName" key="statusName" />
          <Column
            title="Action"
            key="action"
            render={(record) => (
              <div className="button-group">
                <PatientDetailInfo patientId={record.id} />
                {record.statusId === 4 ||
                record.statusId === 3 ||
                record.statusId === 2 ? (
                  <></>
                ) : (
                  <ChangeStatusPatients patientId={record.id} />
                )}
              </div>
            )}
          />
        </Table>
      )}
    </>
  );
}

export default ListOfPatients;
