import { Row, Avatar, Image } from "antd";
import React from "react";

function HomepageComponent() {
  return (
    <>
      <div className="homepage-container">
        <div className="text-box-column">
          <Row className="homepage-image-container">
            <Avatar
              style={{ width: 200, height: 200 }}
              src={
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKQjHBxsISedmv1EQpRfgK71NjXMCMkfcBWZD6ntv095Cg2TsMN6Nvsku_csZc5rgP7Nk&usqp=CAU"
                  style={{
                    width: 200,
                    height: 200,
                  }}
                />
              }
            />
          </Row>
          <Row className="homepage-text">
            Hello <b style={{ paddingLeft: "10px" }}>Name</b>
          </Row>
          <Row className="homepage-text-detail">
            Welcome to the ASAC web application
          </Row>
        </div>
      </div>
    </>
  );
}

export default HomepageComponent;
