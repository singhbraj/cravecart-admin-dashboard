import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/login/login";
import Dashboard from "./layouts/dashboard";
import NonAuth from "./layouts/nonAuth";
import Root from "./layouts/root";
import Users from "./pages/users/users";
import Tenants from "./pages/tenants/Tenants";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
          {
            path: "users",
            element: <Users />,
          },
          {
            path: "/restaurants",
            element: <Tenants />,
          },
          {
            path: "*",
            element: <div>Page Not Found</div>,
          },
          // {
          //     path: '/products',
          //     element: <Products />,
          // },
          // {
          //     path: '/orders',
          //     element: <Orders />,
          // },
          // {
          //     path: '/orders/:orderId',
          //     element: <SingleOrder />,
          // },
        ],
      },
      {
        path: "/auth",
        element: <NonAuth />,
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
]);
