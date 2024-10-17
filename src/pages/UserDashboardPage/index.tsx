import React, { useState, useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles.scss";
import { Container } from "../../shared/components";
import { useUser } from "../../features/userDashboard/hooks/useUser";
import { User } from "../../features/userDashboard/type";
import { FilterBar, UserList } from "../../features/userDashboard/components";

const UserDashboardPage: React.FC = () => {
  const { users, isLoading, isError, error } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const [nameFilter, setNameFilter] = useState("");
  const [sortField, setSortField] = useState<keyof User>("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

  // Load initial state from URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const newActiveFilters = new Set<string>();

    if (searchParams.has("name")) {
      setNameFilter(searchParams.get("name") || "");
      newActiveFilters.add("name");
    }
    if (searchParams.has("sortField")) {
      setSortField((searchParams.get("sortField") as keyof User) || "name");
      newActiveFilters.add("sortField");
    }
    if (searchParams.has("sortOrder")) {
      setSortOrder((searchParams.get("sortOrder") as "asc" | "desc") || "asc");
      newActiveFilters.add("sortOrder");
    }

    setActiveFilters(newActiveFilters);
  }, [location.search]);

  // Update URL when filters change
  useEffect(() => {
    const searchParams = new URLSearchParams();

    if (activeFilters.has("name") && nameFilter) {
      searchParams.set("name", nameFilter);
    }
    if (activeFilters.has("sortField")) {
      searchParams.set("sortField", sortField);
    }
    if (activeFilters.has("sortOrder")) {
      searchParams.set("sortOrder", sortOrder);
    }

    navigate({ search: searchParams.toString() }, { replace: true });
  }, [nameFilter, sortField, sortOrder, activeFilters, navigate]);

  const handleNameFilterChange = (value: string) => {
    setNameFilter(value);
    setActiveFilters(prev => {
      const newSet = new Set(prev);
      if (value) {
        newSet.add("name");
      } else {
        newSet.delete("name");
      }
      return newSet;
    });
  };

  const handleSortFieldChange = (value: keyof User) => {
    setSortField(value);
    setActiveFilters(prev => new Set(prev).add("sortField"));
  };

  const handleSortOrderChange = (value: "asc" | "desc") => {
    setSortOrder(value);
    setActiveFilters(prev => new Set(prev).add("sortOrder"));
  };

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
          setNameFilter={handleNameFilterChange}
          sortField={sortField}
          setSortField={handleSortFieldChange}
          sortOrder={sortOrder}
          setSortOrder={handleSortOrderChange}
        />
        <UserList users={filteredAndSortedUsers} />
      </div>
    </Container>
  );
};

export default UserDashboardPage;