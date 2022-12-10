import { Row, Avatar, Image } from "antd";
import React from "react";

function HomepageComponent() {
  let user = JSON.parse(localStorage.getItem("userDetails"));
  return (
    <>
      <div className="homepage-container">
        <div className="text-box-column">
          <Row className="homepage-image-container">
            <Avatar
              style={{ width: 200, height: 200 }}
              src={
                <Image
                  src={user.avatar}
                  style={{
                    width: 200,
                    height: 200,
                  }}
                />
              }
            />
          </Row>
          <Row className="homepage-text">
            Hello <b style={{ paddingLeft: "10px" }}>{user.name}</b>
          </Row>
          <Row className="homepage-text-detail">
            Welcome to the ASAC web application
          </Row>
          {user.roleId === 1 ? (
            <>
              <Row className="homepage-text-detail">
                You log in with role
                <b style={{ paddingLeft: "10px" }}>Admin</b>
              </Row>
            </>
          ) : user.roleId === 2 ? (
            <>
              <Row className="homepage-text-detail">
                You log in with role
                <b style={{ paddingLeft: "10px" }}>Supporter</b>
              </Row>
            </>
          ) : (
            <>
              <Row className="homepage-text-detail">
                You log in with role
                <b style={{ paddingLeft: "10px" }}>Doctor</b>
              </Row>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default HomepageComponent;
