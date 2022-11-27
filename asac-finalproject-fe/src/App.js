import "./App.css";

import HeaderComponent from "../src/components/Layout/HeaderComponent";
import FooterComponent from "../src/components/Layout/FooterComponent";
import SiderComponent from "../src/components/Layout/SiderComponent";
import Login from "./components/Auth/login";

import { Layout } from "antd";
import ContentComponent from "./components/Layout/ContentComponent";

function App() {
  <Login />;
  return (
    <div className="App">
      <Layout>
        <HeaderComponent />
        <Layout>
          <SiderComponent />
          <ContentComponent />
        </Layout>
        <FooterComponent />
      </Layout>
    </div>
  );
}

export default App;
