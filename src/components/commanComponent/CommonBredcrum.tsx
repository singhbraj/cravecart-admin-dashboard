import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { RightOutlined } from "@ant-design/icons";
import {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
} from "antd/es/breadcrumb/Breadcrumb";
import { AnyObject } from "antd/es/_util/type";

type BredCrumItems = {
  path?: string; // Made optional to align with BreadcrumbItemType
  title: string;
};

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const [items, setItems] = useState<BredCrumItems[]>([
    { path: "/", title: "Dashboard" },
  ]);
  useEffect(() => {
    const newItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      const title = pathSnippets[index]
        .replace(/-/g, " ") // Replaces hyphens with spaces
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalizes the first letter of each word

      // Check if it's the last breadcrumb item
      return {
        path: url,
        title: title,
      };
    });

    setItems((prevItem) => [...prevItem, ...newItems]);
  }, []);

  function itemRender(
    route: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>,
    params: AnyObject,
    routes: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[],
    paths: string[]
  ) {
    const isLast = route?.path === routes[routes.length - 1]?.path;

    return isLast ? (
      <span>{route.title}</span>
    ) : (
      <Link to={`/${paths.join("/")}`}>{route.title}</Link>
    );
  }

  return (
    <Breadcrumb
      separator={<RightOutlined />}
      itemRender={itemRender}
      items={items}
    />
  );
};

export default Breadcrumbs;
