import React from "react";
import { User } from "../../type";
import "./styles.scss";

interface UserListProps {
  users: User[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
  if (!users || users.length === 0) {
    return (
      <div className="wrapper">
        <p className="no-data-message">No users found. Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};