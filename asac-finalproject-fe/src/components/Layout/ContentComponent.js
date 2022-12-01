import RouteComponent from "../../routes";
import { Layout } from "antd";

const { Content } = Layout;

function ContentComponent() {
  return (
    <Content>
      <div style={{ height:'calc(100vh - 134px)', overflowY:'auto'}}>
        <RouteComponent />
      </div>
    </Content>
  );
}

export default ContentComponent;
