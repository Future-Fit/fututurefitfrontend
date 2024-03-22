import apiConfig from "@/app.config";
import { useEffect, useState } from "react";
import axios from "axios";

const PictureUpload = () => {
    const [file, setFile] = useState(null);
    const [userDetail, setUserDetail] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Store the selected file
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
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
            alert("Profile picture updated successfully.")
            window.location.reload();
        } catch (error) {
            // Handle errors
            console.error("Error updating user details:", error.response ? error.response.data : error);
            alert("Profile picture couldn't be updated; please check max. file size or min. dimension.")
            window.location.reload();
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

    const handleDelete = async () => {
        try {
            const token = localStorage.getItem("accessToken");
            if (!token) {
                console.error("No access token found");
                return;
            }

            // Ask for confirmation before deleting
            const confirmed = window.confirm("Are you sure you want to delete your profile picture?");
            if (!confirmed) {
                return; // If not confirmed, exit the function
            }

            const response = await axios.delete(`${apiConfig.url}/users/userImage`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log('Image deleted successfully:', response.data);
            // Handle success actions, e.g., update state or display a message
            alert("Profile picture deleted successfully.");
            window.location.reload(); // Reload the page or update the UI as needed
        } catch (error) {
            // Handle errors
            console.error("Error deleting image:", error.response ? error.response.data : error);
            // Display an error message to the user
            alert("Error deleting profile picture.");
        }
    };


    return (
        <>
            <div className="uploading-outer">
                <div className="uploadButton">
                    {userDetail && userDetail.user_image && (
                        <div>
                            <img width={150} height={150} src={`${apiConfig.url}/${userDetail.user_image.path}`} alt="Profile" />
                            <button className="deleteButton" onClick={handleDelete}><span className="la la-trash"></span></button>
                        </div>
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
                        {file ? file.name : "Browse for Profile Image"}
                    </label>
                </div>

                <div className="text" style={{ fontSize: "0.8em", marginLeft: "20px" }}>
                    Max Size=1MB <br /> Min Dimension=330x300 <br /> Type=.jpg/.jpeg/.png <br />
                    <button className="theme-btn btn-style-one" onClick={handleSubmit}>
                        Upload Image
                    </button>
                </div>
            </div >
        </>
    );
};

export default PictureUpload;
