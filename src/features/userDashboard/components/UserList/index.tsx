import React from "react";
import { User } from "../../type";
import "./styles.scss";

interface UserListProps {
  users: User[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
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
