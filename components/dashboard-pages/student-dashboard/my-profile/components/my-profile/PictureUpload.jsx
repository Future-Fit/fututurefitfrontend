import apiConfig from "@/app.config";
import { useEffect, useState } from "react";
import axios from "axios";

const PictureUpload = () => {
    const [file, setFile] = useState(null);
    const [userDetail, setUserDetail] = useState(null);


    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Store the selected file
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) {
            console.error("Please select a file before uploading.");
            return;
        }

        const formData = new FormData();
        formData.append('user_image', file); // Append the file

        try {
            const token = localStorage.getItem("accessToken");
            if (!token) {
                console.error("No access token found");
                return;
            }

            const response = await axios.put(`${apiConfig.url}/users/profile`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    // Content-Type header for FormData is automatically set by the browser
                },
            });

            console.log('User updated successfully:', response.data);
            // Handle success actions
        } catch (error) {
            console.error("Error updating user details:", error.response ? error.response.data : error);
            // Handle errors
        }
    };

    useEffect(() => {
        const userId = localStorage.getItem("loggedInUserId");
        const token = localStorage.getItem("accessToken");

        if (userId) {
            const fetchUserDetails = async () => {
                try {
                    const response = await axios.get(`${apiConfig.url}/users/me`, {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    });
                    console.log('Response from server:', response.data);
                    setUserDetail(response.data);
                } catch (error) {
                    console.error("Error fetching user details:", error);
                }
            };
            fetchUserDetails();
        }
    }, []);

    return (
        <>

            <div className="uploading-outer">
                <div className="uploadButton">
                    {userDetail && userDetail.user_image && (
                        <img width={150} height={150} src={`${apiConfig.url}/${userDetail.user_image}`} alt="Profile" />
                    )}
                    <input
                        className="uploadButton-input"
                        type="file"
                        name="user_image"
                        accept="image/*"
                        id="upload"
                        required
                        onChange={handleFileChange}
                    />
                    <label htmlFor="upload" className="uploadButton-button ripple-effect">
                        {file ? file.name : "Profile Picture"}
                    </label>
                </div>
                <div className="text">
                    Max File Size: 1MB, Min Dimension: 330x300, File Types: jpg, png
                </div>
                <div><br/><br/><br/><nl><button className="theme-btn btn-style-one" onClick={handleSubmit}>Upload Image</button></nl>
  </div>
            </div>
        </>
    );
};

export default PictureUpload;