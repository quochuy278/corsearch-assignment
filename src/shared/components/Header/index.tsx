import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header: React.FC = () => {
  return (
    <header className="app-header">
      {/* <h1>Corsearch Assignment</h1> */}
      <nav className="nav">
        <ul>
          <li className="btn">
            <Link to="/">Home</Link>
          </li>
          <li className="btn">
            <Link to="/users">User</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
