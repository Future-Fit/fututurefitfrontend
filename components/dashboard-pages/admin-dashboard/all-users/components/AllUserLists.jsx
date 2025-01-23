'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import apiConfig from "@/app.config.js";
import SingleUserDetail from "../../my-profile/components/my-profile/SingleUserDetail";
import EditSingleUser from "../../my-profile/components/my-profile/EditUserDetail";


const AllUserLists = () => {
  const [userDetail, setUserDetail] = useState([]);
  const [singleUserDetail, setSingleUserDetail] = useState(null);
  const [userTypes, setUserTypes] = useState([]);
  const [selectedUserType, setSelectedUserType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  // const [usersPerPage] = useState(20);
  const [usersPerPage, setUsersPerPage] = useState(20);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null }); // Sorting state

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


  const sortUsers = (users) => {
    if (sortConfig.key) {
      return [...users].sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return users;
  };

  const handleSort = (key) => {
    setSortConfig((prev) => {
      const isAscending = prev.key === key && prev.direction === "asc";
      return { key, direction: isAscending ? "desc" : "asc" };
    });
  };

  const fetchSingleUserDetail = async (userId) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get(`${apiConfig.url}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("here is user detail: ", response.data)
      setSingleUserDetail(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleViewUser = (userId) => {
    fetchSingleUserDetail(userId);
    setShowModal(true); // Open modal
  };

  const closeModal = () => {
    setSingleUserDetail(null);
    setShowModal(false); // Close modal
  };

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

  const sortedAndFilteredUsers = sortUsers(filteredUsers);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedAndFilteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Pagination
  // const indexOfLastUser = currentPage * usersPerPage;
  // const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // const currentUsers = sortedAndFilteredUsers.slice(
  //   indexOfFirstUser,
  //   indexOfLastUser
  // );
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleToggleUserStatus = async (userId, currentStatus) => {
    try {
      const confirmed = window.confirm(
        `Are you sure you want to ${currentStatus ? "deactivate" : "activate"} this user?`
      );
      if (!confirmed) return;

      const token = localStorage.getItem("accessToken");
      const response = await axios.put(
        `${apiConfig.url}/auth/toggle-inactive/${userId}`,
        {}, // No body is needed
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("API Response:", response.data);

      setUserDetail(
        userDetail.map((user) =>
          user.id === userId ? { ...user, is_active: !currentStatus } : user
        )
      );

      alert(`User has been ${!currentStatus ? "activated" : "deactivated"} successfully!`);
    } catch (error) {
      console.error("Error toggling user status:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      }
      alert("Failed to update user status. Please try again.", error);
    }
  };

  // const handleArchiveUserStatus = async (userId, currentStatus) => {
  //   try {
  //     const confirmed = window.confirm(
  //       `Are you sure you want to ${currentStatus ? "Unarchive" : "Archive"} this user?`
  //     );
  //     if (!confirmed) return;

  //     const token = localStorage.getItem("accessToken");
  //     const response = await axios.put(
  //       `${apiConfig.url}/auth/archive-user/${userId}`,
  //       {}, // No body is needed
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     console.log("API Response:", response.data);

  //     setUserDetail(
  //       userDetail.map((user) =>
  //         user.id === userId ? { ...user, is_active: !currentStatus } : user
  //       )
  //     );

  //     alert(`User has been ${!currentStatus ? "Archive" : "Unarchive"} successfully!`);
  //   } catch (error) {
  //     console.error("Error toggling user status:", error);
  //     if (error.response) {
  //       console.error("Response data:", error.response.data);
  //       console.error("Response status:", error.response.status);
  //     }
  //     alert("Failed to update user status. Please try again.", error);
  //   }
  // };

  const handleDeleteUser = async (userId) => {
    try {
      const confirmed = window.confirm("Are you sure you want to delete this user?");
      if (!confirmed) {
        console.log("User deletion canceled");
        return;
      }

      const token = localStorage.getItem("accessToken");
      await axios.delete(`${apiConfig.url}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("User deleted successfully");
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user. Please try again.");
    }
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? "▲" : "▼"; // Ascending and descending icons
    }
    return "⇅"; // Default unsorted icon
  };

  const styles = {
    container: {
      margin: "10px 0",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    label: {
      fontSize: "14px",
      color: "#333",
    },
    select: {
      padding: "4px 8px",
      fontSize: "14px",
    },
    sort_icon: {
      marginLeft: "5px",
      fontSize: "12px",
      color: "#666", /* Optional: Change color to suit your design */
    }
  };

  return (
    <div className="tabs-box">
      {singleUserDetail && (
        <div className="modal fade" id="viewSingleUser">
          <div className="modal-dialog modal-lg modal-dialog-centered login-modal modal-dialog-scrollable">
            <div className="modal-content">
              <button
                type="button"
                className="closed-modal"
                data-bs-dismiss="modal"
                onClick={closeModal}
                id="btn-del"
              ></button>
              {/* End close modal btn */}

              <div className="modal-body">
                {/* <!-- Login modal --> */}
                <div id="login-modal">
                  {/* <!-- Login Form --> */}
                  <div className="login-form default-form">
                    <SingleUserDetail user={singleUserDetail} onClose={closeModal} />
                  </div>
                  {/* <!--End Login Form --> */}
                </div>
                {/* <!-- End Login Module --> */}
              </div>
              {/* En modal-body */}
            </div>
            {/* End modal-content */}
          </div>
        </div>

      )}

      {singleUserDetail && (
        <div className="modal fade" id="editSingleUser">
          <div className="modal-dialog modal-lg modal-dialog-centered login-modal modal-dialog-scrollable">
            <div className="modal-content">
              <button
                type="button"
                className="closed-modal"
                data-bs-dismiss="modal"
                onClick={closeModal}
                id="btn-del"
              ></button>
              {/* End close modal btn */}

              <div className="modal-body">
                {/* <!-- Login modal --> */}
                <div id="login-modal">
                  {/* <!-- Login Form --> */}
                  <div className="login-form default-form">
                    <EditSingleUser user={singleUserDetail} onClose={closeModal} />
                  </div>
                  {/* <!--End Login Form --> */}
                </div>
                {/* <!-- End Login Module --> */}
              </div>
              {/* En modal-body */}
            </div>
            {/* End modal-content */}
          </div>
        </div>

      )}
      <div className="widget-title">
        <h4>All System Users</h4>

        <div style={styles.container}>
          <label htmlFor="itemsPerPage" style={styles.label}>
            Show
          </label>
          <select
            id="itemsPerPage"
            value={usersPerPage}
            onChange={(e) => setUsersPerPage(Number(e.target.value))}
            style={styles.select}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <label htmlFor="itemsPerPage" style={styles.label}>
            Entries
          </label>
        </div>

        <div className="bottom-box">
          <div className="text d-flex align-items-center justify-content-center">
            <button
              className="theme-btn btn-style-one"
              data-bs-toggle="modal"
              data-bs-target="#registerModalAdmin"
            >
              Add User
            </button>
          </div>
        </div>

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
                <th onClick={() => handleSort("fname")}>
                  Full Name <span style={styles.sort_icon}>{getSortIcon("fname")}</span>
                </th>
                <th onClick={() => handleSort("email")}>
                  Email <span style={styles.sort_icon}>{getSortIcon("email")}</span>
                </th>
                <th onClick={() => handleSort("phone")}>
                  Phone <span style={styles.sort_icon}>{getSortIcon("phone")}</span>
                </th>
                <th onClick={() => handleSort("is_email_verified")}>
                  Email Verified <span style={styles.sort_icon}>{getSortIcon("is_email_verified")}</span>
                </th>
                <th onClick={() => handleSort("user_type_id")}>
                  User Type <span style={styles.sort_icon}>{getSortIcon("user_type_id")}</span>
                </th>
                <th onClick={() => handleSort("is_active")}>
                  Status <span style={styles.sort_icon}>{getSortIcon("is_active")}</span>
                </th>
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
                          <button data-text="Edit User" data-bs-toggle="modal" data-bs-target="#editSingleUser" onClick={() => handleViewUser(user.id)}>
                            <span className="la la-pencil"></span>
                          </button>
                        </li>
                        <li>
                          <button style={{ color: 'red' }} data-text={user.is_active ? "Deactivate" : "Activate"} onClick={() => handleToggleUserStatus(user.id, user.is_active)}>
                            <span className="la la-ban"></span>
                          </button>
                        </li>
                        <li>
                          <button style={{ color: 'red' }} data-text="Delete User" onClick={() => handleDeleteUser(user.id)}>
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
        </div>
      </div>
      {/* End table widget content */}

      {/* Pagination */}
      <div className="ls-pagination" style={{ display: "flex", justifyContent: "center" }}>
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
