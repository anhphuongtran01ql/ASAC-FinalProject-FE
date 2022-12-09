import {Layout} from "antd";
import HeaderComponent from "./HeaderComponent";
import SiderComponent from "./SiderComponent";
import ContentComponent from "./ContentComponent";
import FooterComponent from "./FooterComponent";

const AdminLayout = () =>{
    return (
        <Layout style={{width:"100vw", height:"100vh", overflow:"hidden"}}>
            <HeaderComponent />
            <Layout>
                <SiderComponent />
                <Layout>
                    <ContentComponent />
                    <FooterComponent />
                </Layout>
            </Layout>
        </Layout>
    )
}

export default AdminLayout;
