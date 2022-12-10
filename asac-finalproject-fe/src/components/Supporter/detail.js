import React from "react";
import { Button, PageHeader, Divider } from "antd";
import { Link, useParams } from "react-router-dom";
import { ProfileOutlined } from "@ant-design/icons";
import "../Admin/user.css";
import Loading from "../../components/General/Loading";
import { useQuery } from "@tanstack/react-query";
import { fetchPatientById } from "../Services/Supporter/patientService";

export function PatientInfo() {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["patient", id],
    queryFn: () => fetchPatientById(id),
  });

  return (
    <>
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        <div className="info-container">
          <PageHeader
            title="Patient record"
            onBack={() => window.history.back()}
          >
            <div className="specialization-info">
              <h1 className="specialization-info-heading">{data.name}</h1>
              <Divider className="divider-detail" orientation="left">
                Personal Information
              </Divider>
              <div className="para-detail">
                <p>
                  <b>Gender: </b>
                  {data.gender === 1 ? "Female" : "Male"}
                </p>
                <p>
                  <b>Year of birth: </b>
                  {data.year}
                </p>
                <p>
                  <b>Phone Number: </b>
                  {data.phone}
                </p>
                <p>
                  <b>Email: </b>
                  {data.email}
                </p>
                <p>
                  <b>Address: </b>
                  {data.address}
                </p>
              </div>

              <Divider className="divider-detail" orientation="left">
                Booking Information
              </Divider>
              <div className="para-detail">
                <p>
                  <b>Booked Doctor: </b>
                  {data.doctorName}
                </p>
                <p>
                  <b>Date Booking: </b>
                  {new Date(data.dateBooking).toLocaleDateString("vi")}
                </p>
                <p>
                  <b>Time Booking: </b>
                  {data.timeBooking}
                </p>
                <p>
                  <b>Description: </b>
                  {data.description}
                </p>
              </div>
            </div>
          </PageHeader>
        </div>
      )}
    </>
  );
}

function PatientDetailInfo({ patientId }) {
  return (
    <>
      <Link to={`${patientId}`}>
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

export default PatientDetailInfo;
