import { Divider, Layout } from "antd";
import "./layout.css";
import Logo from "../../assets/images/Logo.png";
import { Col, Row } from "antd";
import { FlagFilled, PhoneFilled, ClockCircleFilled } from "@ant-design/icons";

const { Footer } = Layout;

function FooterComponent() {
  return (
    <>
      <Footer className="footer-layout">
        <div>
          <Row className="footer-container-content">
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Row className="footer-row">
                <img className="footer-logo" src={Logo} alt="Logo" />
                <h3 className="footer-text-title">ASAC Technology Company</h3>
              </Row>
            </Col>
            <Divider style={{ margin: "5px 0 10px 0" }}></Divider>
            <Col xs={24} sm={24} md={24} lg={12} xl={10}>
              <Row className="footer-row-content">
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h3 className="footer-text">
                    <FlagFilled style={{ paddingRight: "5px" }} />
                    658 Ngo Quyen, An Hai Bac, Son Tra, Da Nang
                  </h3>
                  <h3 className="footer-text">
                    <PhoneFilled style={{ paddingRight: "5px" }} />
                    Business registration number: 0942406133.
                  </h3>
                  <h3 className="footer-text">
                    <ClockCircleFilled style={{ paddingRight: "5px" }} />
                    Danang Department March 16, 2015
                  </h3>
                </Col>
              </Row>
            </Col>

            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
              <Row className="footer-row-content-column">
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h3 className="footer-text">
                    <a style={{ color: "black", fontSize: "16px" }}>About Us</a>
                  </h3>
                  <h3 className="footer-text">
                    <a
                      href="http://localhost:3001/clinics"
                      target="_blank"
                      style={{ color: "black", fontSize: "16px" }}
                    >
                      Our clinics
                    </a>
                  </h3>
                  <h3 className="footer-text">
                    <a
                      href="http://localhost:3001/specializations"
                      target="_blank"
                      style={{ color: "black", fontSize: "16px" }}
                    >
                      Our specializations
                    </a>
                  </h3>
                  <h3 className="footer-text">
                    <a
                      href="http://localhost:3001/doctors"
                      target="_blank"
                      style={{ color: "black", fontSize: "16px" }}
                    >
                      Our doctor
                    </a>
                  </h3>
                </Col>
              </Row>
            </Col>

            <Col xs={24} sm={24} md={12} lg={6} xl={8}>
              <Row className="footer-row-content-column">
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <h3 className="footer-text">
                    <p style={{ color: "black", fontSize: "16px", margin: 0 }}>
                      Headquarters in Danang
                    </p>
                    <h3 className="footer-text-1">
                      576 Ngo Quyen, An Hai Bac, Son Tra, Da Nang
                    </h3>
                  </h3>
                  <h3 className="footer-text">
                    <p style={{ color: "black", fontSize: "16px", margin: 0 }}>
                      Office in Ho Chi Minh City
                    </p>
                    <h3 className="footer-text-1">
                      No. 01, Ho Ba Kien, Ward 15, District 10
                    </h3>
                  </h3>
                  <h3 className="footer-text">
                    <p style={{ color: "black", fontSize: "16px", margin: 0 }}>
                      Customer support
                    </p>
                    <h3 className="footer-text-1">
                      phuongtagcd19842@fpt.edu.vn(8:00 am - 17:00 pm)
                    </h3>
                  </h3>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="footer-content">ASAC ©2022 Created by SPTeam</Row>
        </div>
      </Footer>
    </>
  );
}
export default FooterComponent;