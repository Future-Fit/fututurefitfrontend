"use client"; // Ensure this runs on the client-side

import { useEffect, useState } from "react";
import Link from "next/link.js";
import apiConfig from "@/app.config.js";
const JobListingsTable = () => {
  const [jobApplications, setJobApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    console.log("Retrieved Token:", token);
    if (token) {
      const fetchJobApplications = async () => {
        try {
          const response = await fetch(
            `${apiConfig.url}/job-seeker/myjobApplications`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (!response.ok) {
            throw new Error("Failed to fetch job applications");
          }

          const data = await response.json();
          setJobApplications(data);
        } catch (error) {
          console.error("Error fetching job applications:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchJobApplications();
    }
  }, []);

  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Applied Jobs</h4>

        <div className="chosen-outer">
          <select className="chosen-single form-select">
            <option>All</option>
          </select>
        </div>
      </div>

      <div className="widget-content">
        <div className="table-outer">
          {loading ? (
            <p>Loading job applications...</p>
          ) : jobApplications.length === 0 ? (
            <p>No job applications found.</p>
          ) : (
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Date Applied</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {jobApplications.map((application) => (
                  <tr key={application.id}>
                    <td>
                      <div className="job-block">
                        <h4>
                          <Link href={`/job-single-v3/${application.jobPost.id}`}>
                            {application.jobPost.job_title}
                          </Link>
                        </h4>
                        <ul className="job-info">
                          <li>
                            <span className="icon flaticon-map-locator"></span>
                            {application.jobPost.city || "N/A"}, {application.jobPost.country}
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td>{new Date(application.jobPost.createdAt).toLocaleDateString()}</td>
                    <td className="status">{application.status}</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="View Application">
                              <span className="la la-eye"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Delete Application">
                              <span className="la la-trash"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobListingsTable;
