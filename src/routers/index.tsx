import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomePage, UserDashboardPage } from "../pages";
import ErrorPage from "../pages/ErrorPage";
import ErrorBoundary from "../shared/components/ErrorBoundary";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    ),
    errorElement: <ErrorPage />,
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
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export { routes };
