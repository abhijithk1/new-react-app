import { Button, Flex, Layout, Space } from "antd";
import { ConfigProvider } from "antd";

import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const HeaderMenu = [
  {
    key: "key1",
    label: "nav 1",
  },
  {
    key: "key2",
    label: "nav 2",
  },
  {
    key: "key3",
    label: "nav 3",
  },
];

const HomePage = () => {

  const navigate = useNavigate();
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerColor: "#ffffff",
            headerBg: "#722ed1",
          },
          Button: {
            colorText: "#ffffff",
          },
        },
      }}
    >
      <Layout className="layout">
        <Header className="layout-header">
          <Space size={{ size: "large" }}>
            <div className="logo">Logo</div>
            <Flex align="start" gap={"middle"}>
              <Flex id="header-menu-section-1" gap={"large"} justify="center">
                {HeaderMenu.map((item) => {
                  return (
                    <Button id="header-menu-button" type="text">
                      {item.label}
                    </Button>
                  );
                })}
              </Flex>
              <Flex align="flex-end">
                <Button type="primary" onClick={() => navigate("/login")}>Sign Up</Button>
              </Flex>
            </Flex>
          </Space>
        </Header>
      </Layout>
    </ConfigProvider>
  );
};

export default HomePage;
