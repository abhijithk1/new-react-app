import { Avatar, Button, Flex, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [isPassMatch, setIsPassMatch] = useState("");

  const isPassMatchHandler = () => {
    setLoading(true);
    console.log("login");
    if (pass !== confirmPass) {
      setTimeout(() => {
        setLoading(false);
        setIsPassMatch("error");
      }, 1000);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 6000);
      setIsPassMatch("");
    }
  };
  return (
    <Flex
      id="sign-up-section"
      align="center"
      justify="center"
      gap={"middle"}
      vertical
      style={{ margin: 80 }}
    >
      <Avatar
        style={{ backgroundColor: "#722ed1" }}
        icon={<UserOutlined />}
        size={"large"}
      />
      <Title level={3}>Sign Up</Title>
      <Flex id="sign-up-form" gap={"large"} vertical style={{ width: "25%" }}>
        <Input
          size="large"
          placeholder="Enter the Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input.Password
          size="large"
          status={isPassMatch}
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <Input.Password
          size="large"
          status={isPassMatch}
          placeholder="Confirm Password"
          value={confirmPass}
          onChange={(e) => {
            setConfirmPass(e.target.value);
          }}
        />
        <Button
          size="large"
          block
          type="primary"
          loading={loading}
          onClick={isPassMatchHandler}
        >
          Sign Up
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignUpPage;
