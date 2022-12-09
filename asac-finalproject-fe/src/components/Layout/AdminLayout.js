import { Layout } from "antd";
import HeaderComponent from "./HeaderComponent";
import SiderComponent from "./SiderComponent";
import ContentComponent from "./ContentComponent";
import FooterManage from "./Footer";

const AdminLayout = () => {
  return (
    <Layout>
      <HeaderComponent />
      <Layout>
        <SiderComponent />
        <Layout>
          <ContentComponent />
          <FooterManage />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
