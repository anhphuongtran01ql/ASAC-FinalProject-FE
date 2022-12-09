import RouteComponent from "../../routes";
import { Layout } from "antd";
import "./layout.css";
import ChatbotComponent from "../../Chatbot/ChatbotComponent";
import React from "react";

const { Content } = Layout;

function ContentComponent() {
  return (
    <Content className="content-layout">
      <RouteComponent />
    </Content>
  );
}

export default ContentComponent;
