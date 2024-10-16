import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routers/index.tsx";
import "./shared/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={routes} />
);
