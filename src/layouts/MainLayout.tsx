import { RootState } from "@/store";
import { Layout } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./common/Header";
import Sidebar from "./common/Sider";
import SiderHidden from "./common/SiderHidden";
const { Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Layout hasSider>
      <SiderHidden />
      <Layout className="h-screen overflow-auto">
        <Header />
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