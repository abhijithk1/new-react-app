import { Avatar, Button, Flex, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const { Title, Text } = Typography;

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();


  const loginHandler = () => {
    setLoading(true);
    console.log("login")
    setTimeout(() => {setLoading(false)}, 6000);
  }

  return (
    <Flex id="login-section" align="center" justify="center" gap={"middle"} vertical style={{margin: 80}}>
      <Avatar
        style={{ backgroundColor: "#722ed1" }}
        icon={<LockOutlined />}
        size={"large"}
      />
      <Title level={3}>Login</Title>
      <Flex id="login-form" gap={"large"} vertical style={{width: '25%'}}>
        <Input size="large" placeholder="Enter your Email" value={email} onChange={(e) => {setEmail(e.target.value);}}/>
        <Input.Password size="large" placeholder="Enter your Password" value={pass} onChange={(e) => {setPass(e.target.value);}}/>
        <Button size="large" block type="primary" loading={loading} onClick={loginHandler}>
          Login
        </Button>
        <Flex justify="space-between" gap={"large"}>
          <Text underline italic>
            forgot password?
          </Text>
          <Text underline italic onClick={() => navigate("/sign-up")}>
            Didn't have account? Sign Up
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
