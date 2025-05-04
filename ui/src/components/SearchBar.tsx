import React from "react";
import "../styles/search.css";

// Props interface for SearchBar component
interface Props {
  value: string;
  onChange: (val: string) => void;
  statusFilter: string;
  onStatusChange: (val: string) => void;
  startDate: string;
  endDate: string;
  onDateChange: (start: string, end: string) => void;
}

const SearchBar = ({
  value,
  onChange,
  statusFilter,
  onStatusChange,
  startDate,
  endDate,
  onDateChange,
}: Props) => {
  return (
    <div className="searchbar-container">
      {/* Title filter  */}
      <input
        type="text"
        placeholder="Search by title..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="searchbar-input"
      />

      <div className="searchbar-filters">
        {/* Status Filter */}
        <div className="filter-group">
          <label className="filter-label">Filter by status:</label>
          <div className="status-options">
            {["all", "active", "scheduled", "complete"].map((status) => (
              <label key={status}>
                <input
                  type="radio"
                  name="status"
                  value={status}
                  checked={statusFilter === status}
                  onChange={(e) => onStatusChange(e.target.value)}
                />{" "}
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </label>
            ))}
          </div>
        </div>

        {/* Date Range Filter */}
        <div className="filter-group">
          <label className="filter-label">Filter by date:</label>
          <div className="date-range">
            <div className="date-inline">
              <span className="date-label">From</span>
              <input
                type="date"
                value={startDate}
                onChange={(e) => onDateChange(e.target.value, endDate)}
              />
            </div>
            <div className="date-inline">
              <span className="date-label">To</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => onDateChange(startDate, e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
