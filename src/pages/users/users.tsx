import { useQuery } from "@tanstack/react-query";
import CommonBredcrum from "../../components/commanComponent/CommonBredcrum";
import { getUsers } from "../../http/api";
import { Button, Drawer, Space, Table, theme, Form } from "antd";
import { User } from "../../types";
import { PlusOutlined } from "@ant-design/icons";
import UsersFilter from "./usersFilter";
import { useState } from "react";
import UserForm from "./forms/userForm";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "firstName",
    key: "firstName",
    render: (_text: string, record: User) => {
      return (
        <div>
          {record.firstName} {record.lastName}
        </div>
      );
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
];
const Users = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => {
      return getUsers().then((res) => res.data);
    },
  });

  const {
    token: { colorBgLayout },
  } = theme.useToken();

  return (
    <>
      <CommonBredcrum />
      {isLoading && <div> Loading... </div>}
      {isError && <div> {error.message} </div>}
      {/* <Form form={filterForm} onFieldsChange={onFilterChange}> */}
      <UsersFilter>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setDrawerOpen(true)}
        >
          Add User
        </Button>
      </UsersFilter>
      {/* </Form> */}
      <Table
        style={{ marginTop: "20px" }}
        columns={columns}
        dataSource={users}
        rowKey={"id"}
      />

      <Drawer
        title="Create User"
        width={720}
        destroyOnClose={true}
        open={drawerOpen}
        styles={{ body: { backgroundColor: colorBgLayout } }}
        onClose={() => {
          setDrawerOpen(false);
        }}
        extra={
          <Space>
            <Button
              onClick={() => {
                // form.resetFields();
                setDrawerOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              // onClick={onHandleSubmit}
            >
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical">
          <UserForm />
        </Form>
      </Drawer>
    </>
  );
};

export default Users;
