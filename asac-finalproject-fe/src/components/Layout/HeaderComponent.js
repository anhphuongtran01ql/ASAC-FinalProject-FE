import { Layout } from "antd";
import Logo from "../../assets/images/Logo.png";
import "./layout.css";

const { Header } = Layout;

function HeaderComponent() {
  return (
    <>
      <Header className="header-layout">
        <img className="header-logo" src={Logo} alt="Logo" />
      </Header>
    </>
  );
}
export default HeaderComponent;
