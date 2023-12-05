import { Avatar, Button, Flex, Input } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { Typography } from "antd";

import './LoginPage.css'
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <Flex id="box-section" align="center" gap={"middle"} vertical>
            <Avatar style={{ backgroundColor: '#722ed1' }} icon={<UserOutlined />} size={"large"} />
            <Title level={3}>Login Page</Title>
            <Flex id="login-form" justify="center" gap={"large"} vertical>
                <Input size="large" placeholder="username"/>
                <Input size="large" placeholder="password" type="password"/>
                <Button size="large" block type="primary">Login</Button>
            <Flex align="start" gap={"large"}>
                <Text underline italic>forgot password?</Text>
                <Text underline italic onClick={() => navigate("/sign-up")}>Didn't have account? Sign Up</Text>
            </Flex>
            </Flex>
        </Flex>
    );
}

export default LoginPage;