import React from "react";
import { Descriptions, Button, PageHeader } from "antd";
import { Link, useParams } from "react-router-dom";
import { ProfileOutlined } from "@ant-design/icons";
import "../user.css";
import { fetchDoctorById } from "../../Services/Doctor/doctorService";
import Loading from "../../General/Loading";
import { useQuery } from "@tanstack/react-query";

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
        <div className="doctor-info-container">
          <PageHeader
            title="Doctor information"
            onBack={() => window.history.back()}
          >
            <Descriptions
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
                {data.specialization?.length > 0 ? data.specialization : "N/A"}
              </Descriptions.Item>
              <Descriptions.Item label="Description" span={3}>
                {data.description?.length === 0 ? data.description : "N/A"}
              </Descriptions.Item>
            </Descriptions>
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
