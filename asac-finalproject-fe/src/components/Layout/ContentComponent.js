import RouteComponent from "../../routes";
import { Layout } from "antd";

const { Content } = Layout;

function ContentComponent() {
  return (
    <Content>
      <div>
        <RouteComponent />
      </div>
    </Content>
  );
}

export default ContentComponent;
