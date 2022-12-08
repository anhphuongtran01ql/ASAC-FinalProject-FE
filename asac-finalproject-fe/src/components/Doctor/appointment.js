import React from "react";
import "../Admin/user.css";
import { Table } from "antd";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/General/Loading";
import { fetchPatientsSuccessByDoctorId } from "../Services/Supporter/patientService";
import PatientDetailInfo from "../Supporter/detail";
import FeedbackPatient from "./feedback";

const { Column } = Table;

function ListOfPatientsSuccess() {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["patients"],
    queryFn: () => fetchPatientsSuccessByDoctorId(51),
  });
  return (
    <>
      <p className="table-name-text" style={{ marginBottom: "20px" }}>
        Appointments
      </p>
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        <Table dataSource={data} bordered="true">
          <Column title="Email" dataIndex="email" key="email" />
          <Column
            title="Date Booking"
            dataIndex="dateBooking"
            key="dateBooking"
          />
          <Column
            title="Time Booking"
            dataIndex="timeBooking"
            key="timeBooking"
          />
          <Column
            title="Action"
            key="action"
            render={(record) => (
              <div className="button-group">
                <PatientDetailInfo patientId={record.id} />
                <FeedbackPatient patientId={record.id} />
              </div>
            )}
          />
        </Table>
      )}
    </>
  );
}

export default ListOfPatientsSuccess;
