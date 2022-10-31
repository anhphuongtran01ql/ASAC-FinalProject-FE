import "./App.css";
import { BrowserRouter } from "react-router-dom";

import RouteComponent from "./routes/index";

import HeaderComponent from "../src/components/Layout/HeaderComponent";
import FooterComponent from "../src/components/Layout/FooterComponent";
import SiderComponent from "../src/components/Layout/SiderComponent";

import { Layout } from "antd";
import ContentComponent from "./components/Layout/ContentComponent";

function App() {
  return (
    <div className="App">
      <Layout>
        <HeaderComponent />
        <Layout>
          <Layout>
            <SiderComponent />
            <Layout>
              <ContentComponent />
              <FooterComponent />
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
