import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd"; // Importing Ant Design's Breadcrumb component
import { RightOutlined } from "@ant-design/icons";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    const title = pathSnippets[index]
      .replace(/-/g, " ") // Replaces hyphens with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalizes the first letter of each word

    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{title}</Link>
      </Breadcrumb.Item>
    );
  });

  return (
    <Breadcrumb separator={<RightOutlined />}>
      <Breadcrumb.Item key="dashboard">
        <Link to="/">Dashboard</Link>
      </Breadcrumb.Item>
      {breadcrumbItems}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
