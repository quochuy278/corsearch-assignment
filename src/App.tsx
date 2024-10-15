import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <h1>React TypeScript Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">View Users</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.card}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;