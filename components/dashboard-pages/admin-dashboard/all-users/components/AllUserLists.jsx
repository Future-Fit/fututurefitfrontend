'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import apiConfig from "@/app.config.js";

const AllUserLists = () => {
  const [userDetail, setUserDetail] = useState([]);
  const [userTypes, setUserTypes] = useState([]);
  const [selectedUserType, setSelectedUserType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(20);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const fetchData = async () => {
        try {
          const [userResponse, userTypeResponse] = await Promise.all([
            axios.get(`${apiConfig.url}/users/getAllUsers`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }),
            axios.get(`${apiConfig.url}/user-type`),
          ]);
          setUserDetail(userResponse.data);
          setUserTypes(userTypeResponse.data.result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, []);

  // Filter userDetail based on selectedUserType
  const filteredUsers = userDetail.filter((user) => {
    const userType = userTypes.find((type) => type.id === user.user_type_id);
    const userTypeMatch =
      selectedUserType === "All" ||
      userType.user_type_name === selectedUserType;
    const searchTermMatch =
      user.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.includes(searchTerm);
    return userTypeMatch && searchTermMatch;
  });

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>All System Users</h4>
        <div className="form-group col-lg-6 col-md-12">
          <input
          type="text"
          placeholder="Search here "
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
        <div className="chosen-outer">
        <select
            className="chosen-single form-select"
            onChange={(e) => setSelectedUserType(e.target.value)}
            value={selectedUserType}
          >
            <option value="All">All</option>
            {userTypes.map((type) => (
              <option key={type.id} value={type.user_type_name}>
                {type.user_type_name}
              </option>
            ))}
          </select>
        </div>
       
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <table className="default-table manage-job-table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Email Verified</th>
                <th>User Type</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id}>
                  <td>
                    {user.fname} {user.lname} {user.mname}
                  </td>
                  <td className="applied">
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td>{user.phone}</td>
                  <td className="status">
                    {user.is_email_verified ? "Verified" : "Not Verified"}
                  </td>
                  <td>
                    {userTypes.find((type) => type.id === user.user_type_id)
                      ?.user_type_name}
                  </td>
                  <td className="status">
                    {user.is_active ? "Active" : "Inactive"}
                  </td>
                  <td>
                    <div className="option-box">
                      <ul className="option-list">
                        <li>
                          <button data-text="View User">
                            <span className="la la-eye"></span>
                          </button>
                        </li>
                        <li>
                          <button data-text="Edit User">
                            <span className="la la-pencil"></span>
                          </button>
                        </li>
                        <li>
                          <button data-text="Block User">
                            <span className="la la-ban"></span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* End table widget content */}

      {/* Pagination */}
      <div className="pagination" style={{ display: "flex", justifyContent: "center" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {[...Array(Math.ceil(filteredUsers.length / usersPerPage)).keys()].map(
            (number) => (
              <li key={number + 1} style={{ display: "inline", margin: "0 5px" }}>
                <a
                  onClick={() => paginate(number + 1)}
                  href="#"
                  style={{ textDecoration: "none", color: "black", padding: "5px 10px", border: "1px solid #ccc" }}
                >
                  {number + 1}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
      {/* End pagination */}

      {/* User count */}
      <p>Total Users: {filteredUsers.length}</p>
    </div>
  );
};

export default AllUserLists;
