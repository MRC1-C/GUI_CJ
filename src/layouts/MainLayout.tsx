import { RootState } from "@/store";
import { Layout } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "./common/Sider";
import SiderHidden from "./common/SiderHidden";
const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const { appState } = useSelector((state: RootState) => state.appState);
  return (
    <Layout hasSider>
      {/* {
        appState == '/' ?
          <SiderHidden /> : <Sidebar />
      } */}
      <SiderHidden />
      <Layout className="h-screen overflow-auto">
        {/* <Header style={{ padding: 0, background: 'red' }} /> */}
        <Content>
          <div className="min-h-[calc(100vh-64px)]">
            <Outlet />
          </div>
          <Footer className="bg-white text-center">@CJ</Footer>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;