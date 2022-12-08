import React from "react";
import { Button, PageHeader, Avatar, Row, Col, Image, Divider } from "antd";
import { Link, useParams } from "react-router-dom";
import { ProfileOutlined } from "@ant-design/icons";
import "../user.css";
import { fetchDoctorById } from "../../Services/Doctor/doctorService";
import Loading from "../../General/Loading";
import { useQuery } from "@tanstack/react-query";
import { Markup } from "interweave";

export function DoctorInfo() {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["doctor", id],
    queryFn: () => fetchDoctorById(id),
  });

  return (
    <>
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        <div className="info-container">
          <PageHeader
            title="Doctor information"
            onBack={() => window.history.back()}
          >
            {/* <Descriptions
              className="doctor-info-descriptions"
              layout="horizontal"
              column={{ xxl: 2, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
              size="middle"
              bordered
            >
              <Descriptions.Item label="ID">{data.id}</Descriptions.Item>
              <Descriptions.Item label="Name">{data.name}</Descriptions.Item>
              <Descriptions.Item label="Email">{data.email}</Descriptions.Item>
              <Descriptions.Item label="Address">
                {data.address}
              </Descriptions.Item>
              <Descriptions.Item label="Phone">{data.phone}</Descriptions.Item>
              <Descriptions.Item label="Gender">
                {data.gender === "0" ? "Male" : "Female"}
              </Descriptions.Item>
              <Descriptions.Item label="Specialization">
                {data.specializationName?.length > 0
                  ? data.specializationName
                  : "N/A"}
              </Descriptions.Item>
              <Descriptions.Item label="Description" span={3}>
                {data.description?.length === 0 ? data.description : "N/A"}
              </Descriptions.Item>
            </Descriptions> */}
            <div className="doctor-detail-container">
              <div className="doctor-detail-introduction">
                <Row>
                  <Avatar
                    className="doctor-detail-avatar"
                    shape="square"
                    size={{
                      xs: 100,
                      sm: 100,
                      md: 100,
                      lg: 100,
                      xl: 100,
                      xxl: 100,
                    }}
                    src={
                      <Image
                        style={{
                          width: "100px",
                          height: "100px",
                          resizeMode: "contain",
                        }}
                        src={data.avatar}
                        alt="doctor avatar"
                      />
                    }
                  />
                </Row>
                <Row>
                  <Col>
                    <h1 className="doctor-detail-heading1">{data.name}</h1>
                    <p className="doctor-detail-para">{data.email}</p>
                  </Col>
                </Row>
              </div>

              <div className="specialization-info-content">
                <Divider className="divider-detail" orientation="left">
                  Personal Information
                </Divider>
                <div className="para-detail">
                  <p>
                    <b>Gender: </b>
                    {data.gender === 1 ? "Female" : "Male"}
                  </p>
                  <p>
                    <b>Phone Number: </b>
                    {data.phone}
                  </p>
                  <p>
                    <b>Address: </b>
                    {data.address}
                  </p>
                  {!data.generalInfo ? (
                    ""
                  ) : (
                    <>
                      <p>
                        <b>Description </b>
                        <Markup content={data.generalInfo} />
                      </p>
                    </>
                  )}
                </div>

                <Divider className="divider-detail" orientation="left">
                  Member Information
                </Divider>
                <div className="para-detail">
                  <p>
                    <b>Clinic Name: </b>
                    {data.clinicName}
                  </p>
                  <p>
                    <b>Clinic Address: </b>
                    {data.clinicAddress}
                  </p>
                  <p>
                    <b>Specialization Name: </b>
                    {data.specializationName}
                  </p>
                </div>
              </div>
            </div>
          </PageHeader>
        </div>
      )}
    </>
  );
}

function DoctorDetails({ doctorId }) {
  return (
    <>
      <Link to={`/admin/list-doctors/${doctorId}`}>
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
