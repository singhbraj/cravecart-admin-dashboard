import { Button, Card, Checkbox, Form, Input, Layout, Space } from "antd";
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
          <Form>
            <Form.Item name="username">
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item name="password">
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item name="remember">
              <Checkbox>Remember me</Checkbox>
              <a href="">Forgot password</a>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
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
