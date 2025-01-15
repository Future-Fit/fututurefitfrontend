'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import apiConfig from "@/app.config.js";
import Link from "next/link";
import GlobalConfig from "@/Global.config";
import FormInfoBox from "../../my-profile/components/my-profile/FormInfoBox";
import SingleUserDetail from "../../my-profile/components/my-profile/SingleUserDetail";
import EditSingleUser from "../../my-profile/components/my-profile/EditUserDetail";


const AllUserLists = () => {
  const [userDetail, setUserDetail] = useState([]);
  const [singleUserDetail, setSingleUserDetail] = useState(null);
  const [userTypes, setUserTypes] = useState([]);
  const [selectedUserType, setSelectedUserType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(20);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

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

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleBanUser = async (useremail) => {
    try {
      const token = localStorage.getItem("accessToken");
      await axios.put(`${apiConfig.url}/auth/toggle-verify/`,
        { email: useremail, is_active: false, is_email_verified: false },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      // Update userDetail state to reflect the change in is_active status
      setUserDetail(userDetail.map(user => user.email === useremail ? { ...user, is_active: false, is_email_verified: false } : user));
      console.log("User banned successfully");
    } catch (error) {
      console.error("Error banning user:", error);
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
                          <button data-text="View User" data-bs-toggle="modal" data-bs-target="#viewSingleUser" onClick={() => handleViewUser(user.id)}>
                            <span className="la la-eye"></span>
                          </button>
                        </li>
                        <li>
                          <button data-text="Edit User" data-bs-toggle="modal" data-bs-target="#editSingleUser" onClick={() => handleViewUser(user.id)}>
                            <span className="la la-pencil"></span>
                          </button>
                        </li>
                        <li>
                          <button data-text="Block User" onClick={() => handleBanUser(user.email)}>
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
