import "../Doctor/doctor.css";

import React, { useState } from "react";
import { List } from "antd";
import { Layout } from "antd";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecializations } from "../Services/Specialization/specializationService";
import Loading from "../General/Loading";
import Back from "../General/Back";
import ChatbotComponent from "../../chatbot/ChatbotComponent";

const { Content } = Layout;
const { Search } = Input;

const Specialization = () => {
  const [name, setName] = useState("");
  const {
    data: specializations,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["specializations", name],
    queryFn: () => fetchSpecializations(name),
  });

  const onSearch = (value) => {
    setName(value);
    refetch();
  };

  return (
    <>
      <ChatbotComponent />
      <Back title="Specializations" />
      <div className="specialization-container general-container-style">
        <Search
          placeholder="Search specializations"
          allowClear
          onSearch={onSearch}
          className="search"
          style={{}}
        />
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            paddingTop: 0,
            paddingLeft: 0,
            margin: 0,
            minHeight: 280,
            height: "100%",
          }}
        >
          <div className="title-result">Specializations</div>
          {isLoading || isFetching ? (
            <Loading />
          ) : (
            <List
              itemLayout="horizontal"
              dataSource={specializations}
              renderItem={(item) => (
                <List.Item className="doctor-list">
                  <List.Item.Meta
                    avatar={
                      <img
                        style={{ height: "80px", width: "150px" }}
                        src={item.image}
                        alt="123"
                      />
                    }
                    title={
                      <Link to={`/specializations/${item.id}`}>
                        {item.name}
                      </Link>
                    }
                  />
                </List.Item>
              )}
            />
          )}
        </Content>
      </div>
    </>
  );
};
export default Specialization;
