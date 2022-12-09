import { DATA } from "../DATA/home/HomeConstant";
import { Link } from "react-router-dom";
import { QuestionCircleOutlined } from "@ant-design/icons";
import React from "react";
import Logo from "../../../src/assets/images/Logo.png";
import { Row } from "antd";
import "./home.css";

const HeaderHomePage = () => {
  return (
    <header className="header-homepage">
      <div className="container-home header">
        <div className="logo">
          <Row className="homepage-row">
            <img className="homepage-logo" src={Logo} alt="ASAC" />
            <p className="homepage-paragraph">ASAC web application</p>
          </Row>
        </div>

        <div className="menu">
          {DATA.map((item, index) => {
            return (
              <div key={index}>
                <Link to={item.link}>{item.title}</Link>
                <div className="description-header">{item.description}</div>
              </div>
            );
          })}
        </div>

        <div className="support">
          <QuestionCircleOutlined />
          <Link className="link-about-us" to="/aboutUs">
            About us
          </Link>
        </div>
      </div>
    </header>
  );
};
export default HeaderHomePage;
