import { Layout } from 'antd';
const { Header } = Layout;
function HeaderComponent() {
  return (
    <>
      <Header
        className="site-layout-sub-header-background"
        style={{
          padding: 0,
        }}
      />
    </>
  );
}
export default HeaderComponent;
