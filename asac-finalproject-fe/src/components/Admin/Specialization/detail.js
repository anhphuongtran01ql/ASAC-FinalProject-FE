import React from "react";
import { Button, PageHeader, Divider, Image } from "antd";
import { Link, useParams } from "react-router-dom";
import { ProfileOutlined } from "@ant-design/icons";
import "../user.css";
import Loading from "../../General/Loading";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecializationById } from "../../Services/Specialization/specializationService";
import { Markup } from "interweave";

export function SpecializationInfo() {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["specialization", id],
    queryFn: () => fetchSpecializationById(id),
  });

  return (
    <>
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        <div className="info-container">
          <PageHeader
            title="Specialization information"
            onBack={() => window.history.back()}
          >
            <div className="specialization-info">
              <h1 className="specialization-info-heading">{data.name}</h1>
              <Divider className="divider-detail" orientation="left">
                Description
              </Divider>
              <div className="para-detail">
                {!data.image ? (
                  ""
                ) : (
                  <div className="clinic-image">
                    <Image src={data.image} alt="specialization image" />
                  </div>
                )}
                <Markup content={data.descriptionHTML} />
              </div>
            </div>
          </PageHeader>
        </div>
      )}
    </>
  );
}

function SpecializationsDetailInfo({ specializationId }) {
  return (
    <>
      <Link to={`/admin/list-specializations/${specializationId}`}>
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

export default SpecializationsDetailInfo;
