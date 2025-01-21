"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import apiConfig from "@/app.config";

const ActivityLogs = () => {
  const [activityLogs, setActivityLogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const logsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      setLoading(true);
      try {
        const response = await axios.get(`${apiConfig.url}/activity-log`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setActivityLogs(response.data);
      } catch (err) {
        setError("Failed to fetch activity logs");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const sortLogs = (logs) => {
    if (!sortConfig.key) return logs;
    return [...logs].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  };

  const filteredLogs = activityLogs.filter((log) =>
    log.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (log.description || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
    (log.action || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedAndFilteredLogs = sortLogs(filteredLogs);
  const indexOfLastLog = currentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const currentLogs = sortedAndFilteredLogs.slice(indexOfFirstLog, indexOfLastLog);

  return (
    <div className="tabs-box">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* Filters */}
      <div className="widget-title">
        <input
          type="text"
          placeholder="Search activity logs"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="widget-content">
        <div className="table-outer">
          <table className="default-table manage-job-table">
            <thead>
              <tr>
                <th onClick={() => handleSort("name")}>Name</th>
                <th onClick={() => handleSort("description")}>Description</th>
                <th onClick={() => handleSort("user_id")}>User ID</th>
                <th onClick={() => handleSort("action")}>Action</th>
                <th onClick={() => handleSort("entity_type")}>Entity Type</th>
                <th onClick={() => handleSort("entity_id")}>Entity ID</th>
                <th onClick={() => handleSort("created_at")}>Created At</th>
              </tr>
            </thead>

            <tbody>
              {currentLogs.map((log) => (
                <tr key={log.id}>
                  <td>{log.name}</td>
                  <td>{log.description}</td>
                  <td>{log.user_id}</td>
                  <td>{log.action}</td>
                  <td>{log.entity_type}</td>
                  <td>{log.entity_id}</td>
                  <td>{new Date(log.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="ls-pagination" style={{ display: "flex", justifyContent: "center" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {[...Array(Math.ceil(filteredLogs.length / logsPerPage)).keys()].map(
            (number) => (
              <li key={number + 1} style={{ display: "inline", margin: "0 5px" }}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(number + 1);
                  }}
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "5px 10px",
                    border: "1px solid #ccc",
                  }}
                >
                  {number + 1}
                </a>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Logs count */}
      <p>Total Logs: {filteredLogs.length}</p>
    </div>
  );
};

export default ActivityLogs;
