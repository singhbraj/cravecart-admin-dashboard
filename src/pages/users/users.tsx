import { useQuery } from "@tanstack/react-query";
import CommonBredcrum from "../../components/commanComponent/CommonBredcrum";
import { getUsers } from "../../http/api";
import { Table } from "antd";
import { User } from "../../types";

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

  return (
    <>
      <CommonBredcrum />
      {isLoading && <div> Loading... </div>}
      {isError && <div> {error.message} </div>}
      <Table
        style={{ marginTop: "20px" }}
        columns={columns}
        dataSource={users}
      ></Table>
    </>
  );
};

export default Users;
