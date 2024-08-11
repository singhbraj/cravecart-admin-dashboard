import {
  Alert,
  Button,
  Card,
  Checkbox,
  Flex,
  Form,
  Input,
  Layout,
  Space,
} from "antd";
import "./login.css";
import { LockFilled, LockOutlined, UserOutlined } from "@ant-design/icons";
import Logo from "../../components/icons/Logo";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Credentials } from "../../types";
import { login, self } from "../../http/api";
import { useAuthStore } from "../../store";

const loginUser = async (userData: Credentials) => {
  const { data } = await login(userData);
  return data;
};

const getSelf = async () => {
  const { data } = await self();
  return data;
};

const LoginPage = () => {
  const { setUser } = useAuthStore();

  const { refetch } = useQuery({
    queryKey: ["self"],
    queryFn: getSelf,
    enabled: false,
  });

  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: async () => {
      // getself
      const selfDataPromise = await refetch();
      // store data in store
      setUser(selfDataPromise.data);
      console.log("Login successfull");
    },
  });

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
          <Form
            initialValues={{ remember: true }}
            onFinish={(values) => {
              mutate({ email: values.username, password: values.password });
              console.log(values);
            }}
          >
            {isError && (
              <Alert
                style={{ marginBottom: 24 }}
                type="error"
                message={error?.message}
              />
            )}
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
                loading={isPending}
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
