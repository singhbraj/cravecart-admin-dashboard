import { Button, Card, Checkbox, Flex, Form, Input, Layout, Space } from "antd";
import "./login.css";
import { LockFilled, LockOutlined, UserOutlined } from "@ant-design/icons";
import Logo from "../../components/icons/Logo";

const LoginPage = () => {
  return (
    <Layout className="loginwrapper">
      <Space direction="vertical" align="center" size="large">
        <Logo />
        <Card
          className="login-card"
          bordered={false}
          title={
            <Space
              style={{
                width: "100%",
                fontSize: "16",
                justifyContent: "center",
              }}
            >
              <LockFilled />
              Sign in
            </Space>
          }
        >
          <Form initialValues={{ remember: true }}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username",
                },
                {
                  type: "email",
                  message: "Email is not valid",
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="">Forgot password</a>
            </Flex>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%", marginTop: "20px" }}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Space>
    </Layout>
  );
};

export default LoginPage;
