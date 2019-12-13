import { Layout as AntdLayout } from "antd";
import NavBar from "./NavBar";
import SiderBar from "./SiderBar";

const { Header, Sider, Content, Footer } = AntdLayout;

const Layout = props => (
  <AntdLayout>
    <Header style={{ display: "flex", alignItems: "center" }}>
      <NavBar />
    </Header>
    <AntdLayout>
      <Sider>
        <SiderBar />
      </Sider>
      <Content>{props.children}</Content>
    </AntdLayout>
  </AntdLayout>
);
export default Layout;
