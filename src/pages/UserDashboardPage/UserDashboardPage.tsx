import React from 'react';
// import { UserList } from '../../features/userDashboard/components';
import styles from './UserDashboardPage.module.scss';

const UserDashboardPage: React.FC = () => {
  return (
    <div className={styles.userDashboardPage}>
      <h1>User Dashboard</h1>
      {/* <UserList /> */}
      {/* Add other components from the userDashboard feature as needed */}
    </div>
  );
};

export default UserDashboardPage;