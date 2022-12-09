import "../Doctor/doctor.css";

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../General/Loading";
import Back from "../General/Back";
import { Divider, Tabs, Avatar } from "antd";
import { fetchClinicById } from "../Services/Clinic/clinicService";
import InfoTab from "./clinicDetail/infoTab";
import {
  EQUIPMENT,
  INTRODUCE,
  INTRODUCEIMG,
} from "../DATA/clinic/clinicDetail";
import BookAppointment from "./clinicDetail/bookAppointment";
import { EnvironmentOutlined } from "@ant-design/icons";

const ClinicDetail = () => {
  const { id } = useParams();
  const {
    data: clinic,
    isLoading: isClinicsDataLoading,
    isFetching: isClinicsDataFetching,
  } = useQuery({
    queryKey: ["clinics", id],
    queryFn: () => fetchClinicById(id),
  });
  return (
    <>
      {isClinicsDataFetching || isClinicsDataLoading ? (
        <Loading />
      ) : (
        <div>
          <Back title={clinic?.name} />
          <div className="white-background padding-top padding-bottom-footer">
            <div className="clinic-detail-container ">
              <div className="flex-column">
                <img
                  className="clinic-img"
                  src={clinic.image}
                  alt="clinic-image"
                />
                <div className="avatar-container line-bottom justify-content-center">
                  <Avatar
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                    icon={
                      <img
                        style={{
                          height: "100px",
                          width: "100px",
                        }}
                        className="avatar-clinic"
                        src={clinic.avatar}
                        alt="clinic-avatar"
                      />
                    }
                  />
                  <div>
                    <div className="title-result color-primary">
                      {clinic.name}
                    </div>
                    <div>
                      <EnvironmentOutlined className="color-primary " />
                      <span>{clinic.address}</span>
                    </div>
                  </div>
                </div>
                <div className="card-container">
                  <Tabs defaultActiveKey="1">
                    <Tabs.TabPane
                      className="color-primary"
                      tab="Book an appointment"
                      key="1"
                    >
                      <BookAppointment clinicId={id} />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Introduce" key="2">
                      <InfoTab
                        title="Introduce"
                        content={clinic.introductionHTML}
                      />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Equipment" key="3">
                      <InfoTab
                        title="Equipment"
                        content={clinic.equipmentHTML}
                        img={clinic.equipmentImg}
                      />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Location" key="4">
                      <InfoTab
                        title="Location"
                        content={clinic.locationHTML}
                        img={clinic.locationImg}
                      />
                    </Tabs.TabPane>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ClinicDetail;
