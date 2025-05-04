import React from "react";
import { useEffect, useState } from "react";
import { Contribution, fetchContributions } from "../utils/api";
import ContributionCard from "../components/ContributionCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const ITEMS_PER_PAGE = 14;

// Utility to determine contribution status based on time
const getStatus = (start: string, end: string): string => {
  const now = new Date();
  const s = new Date(start);
  const e = new Date(end);
  if (e < now) return "complete";
  if (s > now) return "scheduled";
  return "active";
};

const HomePage = () => {
  // State management for data, filters, pagination
  const [data, setData] = useState<Contribution[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Fetch contributions from API with filters applied
    fetchContributions({
      skip: 0,
      limit: 1000,
      title: search,
    })
      .then((res) => {
        let filtered = res.contributions;

        // Filter by status
        if (statusFilter !== "all") {
          filtered = filtered.filter(
            (item) => getStatus(item.startTime, item.endTime) === statusFilter
          );
        }

        // Filter by startDate
        if (startDate) {
          filtered = filtered.filter((item) => item.startTime >= startDate);
        }

        // Filter by endDate
        if (endDate) {
          filtered = filtered.filter((item) => item.startTime <= endDate + "T23:59:59");
        }

        // Paginate filtered results
        const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
        setData(paginated);
        setTotal(filtered.length);
      })
      .catch(console.error);
  }, [page, search, statusFilter, startDate, endDate]);

  return (
    <div className="layout">
      <div className="container">
        <SearchBar
          value={search}
          onChange={(val) => {
            setPage(1);
            setSearch(val);
          }}
          statusFilter={statusFilter}
          onStatusChange={(val) => {
            setPage(1);
            setStatusFilter(val);
          }}
          startDate={startDate}
          endDate={endDate}
          onDateChange={(start, end) => {
            setPage(1);
            setStartDate(start);
            setEndDate(end);
          }}
        />

        {data.length === 0 ? (
          <div className="grid">
          <div style={{ gridColumn: "1 / -1", width: "100%" }}>
            <p style={{ textAlign: "center", fontSize: "18px", marginTop: "40px", color: "white" }}>
              No results found.
            </p>
          </div>
        </div>
        ) : (
          <div className="grid">
            {data.map((item) => (
              <ContributionCard key={item.id} data={item} />
            ))}
          </div>
        )}
      </div>

      <Pagination
        currentPage={page}
        totalPages={Math.ceil(total / ITEMS_PER_PAGE)}
        onPageChange={setPage}
      />
    </div>
  );
};

export default HomePage;
