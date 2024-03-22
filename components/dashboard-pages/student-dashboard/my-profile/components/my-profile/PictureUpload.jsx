import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiConfig from '@/app.config';

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
            alert('Profile picture deleted successfully.');
            window.location.reload();
        } catch (error) {
            console.error('Error deleting image:', error.response ? error.response.data : error);
            alert('Error deleting profile picture.');
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
        <div className="uploading-outer">
            <div className="uploadButton">
                {userDetail && userDetail.user_image ? (
                    <div onClick={handleImageClick} style={{ cursor: 'pointer' }}>
                        <img
                            width={150}
                            height={150}
                            src={`${apiConfig.url}/${userDetail.user_image.path}`}
                            alt="Profile"
                        />
                        <button className="deleteButton" onClick={handleDelete}>
                            <span className="la la-trash"></span>
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
                        <label htmlFor="upload" className="uploadButton-button ripple-effect" style={{ cursor: 'pointer' }}>
                            {file ? file.name : 'Profile Picture'}
                        </label>
                    </React.Fragment>
                )}
            </div>
            <div className="row">
                <div className="text">
                    Max File Size: 1MB, Min Dimension: 330x300, File Types: .jpg, .jpeg, .png <br /><br />
                </div>
                <div>
                    <button className="theme-btn btn-style-one" onClick={handleSubmit}>
                        Upload Image
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PictureUpload;
