import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiConfig from '@/app.config';
import { style } from 'd3';

const PictureUpload = () => {
    const [file, setFile] = useState(null);
    const [userDetail, setUserDetail] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem('loggedInUserId');
        const token = localStorage.getItem('accessToken');

        if (userId) {
            const fetchUserDetails = async () => {
                try {
                    const response = await axios.get(`${apiConfig.url}/users/me`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setUserDetail(response.data);
                } catch (error) {
                    console.error('Error fetching user details:', error);
                }
            };
            fetchUserDetails();
        }
    }, []);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) {
            console.error('Please select a file before uploading.');
            return;
        }

        const formData = new FormData();
        formData.append('user_image', file);

        try {
            const token = localStorage.getItem('accessToken');
            const response = await axios.put(`${apiConfig.url}/users/profile`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('User updated successfully:', response.data);
            alert('Profile picture updated successfully.');
            window.location.reload();
        } catch (error) {
            console.error('Error updating user details:', error.response ? error.response.data : error);
            alert('Profile picture couldn\'t be updated; please check max. file size or min. dimension.');
            window.location.reload();
        }
    };

    const handleDelete = async () => {
        try {
            const token = localStorage.getItem('accessToken');
            const response = await axios.delete(`${apiConfig.url}/users/userImage`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('Image deleted successfully:', response.data);
            alert('Delete profile image?');
            window.location.reload();
        } catch (error) {
            console.error('Error deleting image:', error.response ? error.response.data : error);
            alert('Error deleting profile image.');
        }
    };

    const handleImageClick = () => {
        const uploadInput = document.getElementById('upload');
        if (uploadInput) {
            uploadInput.click();
        } else {
            console.error("Upload input element not found.");
        }
    };


    return (
        <div className="uploading-outer" style={{marginBottom: "10px"}}>
            <div className="uploadButton">
                {userDetail && userDetail.user_image ? (
                    <div onClick={handleImageClick} style={{ cursor: 'pointer' }}>
                        <img
                            width={100}
                            height={100}
                            src={`${apiConfig.url}/${userDetail.user_image.path}`}
                            alt="Profile"
                        /> <br />
                        <button className="deleteButton" onClick={handleDelete}>
                            <span className="la la-trash"></span>
                            <text style={{ fontSize: "0.8em", fontWeight: "lighter" }}>
                                Delete/Replace Profile Image
                            </text>

                        </button>
                    </div>
                ) : (
                    <React.Fragment>
                        <input
                            className="uploadButton-input"
                            type="file"
                            name="user_image"
                            accept="image/*"
                            id="upload"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                        <label htmlFor="upload" className="uploadButton-button ripple-effect"
                            style={{ cursor: 'pointer', fontSize: "0.8em" }}>
                            <text style={{ fontSize: "1em", fontWeight: "bolder" }}>
                                Profile Image
                            </text>
                            {file ? file.name : 'Click here to browse & select.'}
                            <text> Then, click on Upload Image.</text>
                        </label>
                        <div className="text" style={{ fontSize: "0.8em", marginLeft: "20px" }}>
                            Max Size=1MB <br /> Min Dim.=330x300 <br /> Type=.jpg/.jpeg/.png <br /><br/>
                        {/* </div> */}
                        {/* <div className="text" style={{ fontSize: "0.8em", marginLeft: "20px" }}> */}
                            <button className="theme-btn btn-style-one"
                                onClick={handleSubmit} style={{ paddingTop: "10px" }}>
                                Upload Image
                            </button>
                        </div>
                    </React.Fragment>

                )}
            </div>

        </div>
    );
};

export default PictureUpload;
