import React from "react";
import { User } from "../../type";
import "./styles.scss";

interface FilterBarProps {
  nameFilter: string;
  setNameFilter: (filter: string) => void;
  sortField: keyof User;
  setSortField: (field: keyof User) => void;
  sortOrder: "asc" | "desc";
  setSortOrder: (order: "asc" | "desc") => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  nameFilter,
  setNameFilter,
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
}) => {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Filter by name"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <select
        value={sortField}
        onChange={(e) => setSortField(e.target.value as keyof User)}
      >
        <option value="name">Name</option>
        <option value="email">Email</option>
      </select>
      <button
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
      >
        {sortOrder === "asc" ? "↑" : "↓"}
      </button>
    </div>
  );
};
