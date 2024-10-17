import React from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
import { Header } from "./shared/components";

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default App;