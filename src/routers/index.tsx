import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UserDashboardPage from "../pages/UserDashboardPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <UserDashboardPage />,
  },
]);

export { routes };
