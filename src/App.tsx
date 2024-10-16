import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.scss";
import Container from "./shared/components/Container";

const App: React.FC = () => {
  return (
    <Container>
      <div className="wrapper">
        <h1>Corsearch Assignment</h1>
        <nav className="nav">
          <ul>
            <li className="btn">
              <Link to="/users">Go to user page</Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </div>
    </Container>
  );
};

export default App;
