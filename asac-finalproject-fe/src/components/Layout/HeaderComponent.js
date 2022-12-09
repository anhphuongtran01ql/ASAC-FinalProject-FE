import { Layout, Row, Col } from "antd";
import Logo from "../../assets/images/Logo.png";
import Logout from "../Auth/logout";
import "./layout.css";

const { Header } = Layout;

function HeaderComponent() {
  return (
    <>
      <Header
        className="header-layout"
        style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}
      >
        <Row className="row-header">
          <Col xs={4} sm={4} md={4} lg={1} xl={1}>
            <img className="header-logo" src={Logo} alt="Logo" />
          </Col>
          <Col xs={16} sm={16} md={16} lg={22} xl={22}></Col>
          <Col xs={4} sm={4} md={2} lg={1} xl={1}>
            <Logout />
          </Col>
        </Row>
      </Header>
    </>
  );
}
export default HeaderComponent;
