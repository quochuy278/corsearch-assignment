import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomePage, UserDashboardPage } from "../pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "users",
        element: <UserDashboardPage />,
      },
    ],
  },
]);

export { routes };
