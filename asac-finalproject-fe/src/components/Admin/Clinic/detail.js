import React from "react";
import { Button, Divider, PageHeader } from "antd";
import { Link, useParams } from "react-router-dom";
import { ProfileOutlined } from "@ant-design/icons";
import "../user.css";
import Loading from "../../General/Loading";
import { useQuery } from "@tanstack/react-query";
import { Markup } from "interweave";
import { fetchClinicById } from "../../Services/Clinic/clinicService";

export function ClinicInfo() {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["clinic", id],
    queryFn: () => fetchClinicById(id),
  });

  return (
    <>
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        <div className="info-container">
          <PageHeader
            title="Clinic information"
            onBack={() => window.history.back()}
          >
            <div className="specialization-info">
              <h1 className="specialization-info-heading">{data.name}</h1>
              <div className="specialization-info-content">
                <Divider className="divider-detail" orientation="left">
                  Description
                </Divider>
                <div className="para-detail">
                  <p>
                    <b>Address: </b>
                    {data.address}
                  </p>
                  <p>
                    <b>Phone Number: </b>
                    {data.phone}
                  </p>
                  <p>
                    <b>Description: </b>
                    {data.description}
                  </p>
                </div>
                <Divider className="divider-detail" orientation="left">
                  Introductions
                </Divider>
                <div className="para-detail">
                  <Markup content={data.introductionHTML} />
                </div>
              </div>
            </div>
          </PageHeader>
        </div>
      )}
    </>
  );
}

function ClinicDetailInfo({ clinicId }) {
  return (
    <>
      <Link to={`/admin/list-clinics/${clinicId}`}>
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

export default ClinicDetailInfo;
