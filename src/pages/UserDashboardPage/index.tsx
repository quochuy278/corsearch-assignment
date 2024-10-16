import React, { useState, useMemo } from "react";
import "./styles.scss";
import { Container } from "../../shared/components";
import { useUser } from "../../features/userDashboard/hooks/useUser";
import { User } from "../../features/userDashboard/type";
import { FilterBar, UserList } from "../../features/userDashboard/components";

const UserDashboardPage: React.FC = () => {
  const { users, isLoading, isError, error } = useUser();
  const [nameFilter, setNameFilter] = useState("");
  const [sortField, setSortField] = useState<keyof User>("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const filteredAndSortedUsers = useMemo(() => {
    if (!users) return [];

    return users
      .filter((user) =>
        user.name.toLowerCase().includes(nameFilter.toLowerCase())
      )
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return sortOrder === "asc" ? -1 : 1;
        if (a[sortField] > b[sortField]) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
  }, [users, nameFilter, sortField, sortOrder]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <Container>
      <div className="wrapper">
        <h1>User Dashboard</h1>
        <FilterBar
          nameFilter={nameFilter}
          setNameFilter={setNameFilter}
          sortField={sortField}
          setSortField={setSortField}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
        <UserList users={filteredAndSortedUsers} />
      </div>
    </Container>
  );
};

export default UserDashboardPage;
