
'use client'

import { useEffect, useState } from "react";
import axios from 'axios';
import apiConfig from "@/app.config";

// validation chaching
function checkFileTypes(files) {
    const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "audio/mp3",
        "video/mp4"
    ];
    for (let i = 0; i < files.length; i++) {
        if (!allowedTypes.includes(files[i].type)) {
            return false;
        }
    }
    return true;
}

const MAX_UPLOAD_LIMIT = 5; // Maximum number of uploads allowed per user


const CvUploader = () => {
    const [getManager, setManager] = useState([]);
    const [getError, setError] = useState("");
    const token = localStorage.getItem("accessToken");
    const [userDetail, setUserDetail] = useState([]);


    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`${apiConfig.url}/job-seeker/cv`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                setUserDetail(response.data);
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };
        fetchUserDetails();
    }, [token]);

    // Count the number of files uploaded by the user
    const uploadedFilesCount = userDetail.length;

    // Display a message when the user reaches the maximum upload limit
    const maxUploadReached = uploadedFilesCount >= MAX_UPLOAD_LIMIT;


    const uploadFiles = async () => {
        // Loop through the files in getManager and upload them
        getManager.forEach(async (file) => {
            const formData = new FormData();
            formData.append('file', file); // Assuming the API expects the file under the key 'cv'

            try {
                const response = await axios.post(`${apiConfig.url}/job-seeker/cv`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "Authorization": `Bearer ${token}`
                    },
                });
                // console.log('Upload successful', response.data);
                alert("Upload successful.");
                window.location.reload();
                // Handle success (e.g., showing a success message, removing the file from getManager, etc.)
            } catch (error) {
                console.error('Upload failed.', error);
                alert("Upload failed; file too large or unsupported file type.");
                window.location.reload();
                // Handle error (e.g., showing an error message)
            }
        });
    };

    const cvManagerHandler = (e) => {
        const data = Array.from(e.target.files);

        const isExist = getManager?.some((file1) =>
            data.some((file2) => file1.name === file2.name)
        );
        if (!isExist) {
            if (checkFileTypes(data)) {
                setManager(getManager.concat(data));
                setError("");
            } else {
                setError("File type not allowed; please check.");
            }
        } else {
            setError("File already exists.");
        }
    };

    // delete image
    const removeFile = (name) => {
        const deleted = getManager?.filter((file) => file.name !== name);
        setManager(deleted);
    };

    const deleteHandler = async (fileId) => {
        try {
            // Make API call to delete the file using fileId as a query parameter
            console.log("Deleting file with id:", fileId);
            const response = await axios.delete(`${apiConfig.url}/job-seeker/cv`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                params: {
                    fileId: fileId
                }
            });
            console.log("File deleted:");
            alert("File deleted.");
            window.location.reload();
            // Update the state to remove the deleted file
            setUserDetail(userDetail.filter(item => item.file && item.file.id !== fileId));
        } catch (error) {
            console.error("Error deleting file:", error);
        }
    };

    const onViewFile = (file) => {
        if (file && file.path) {
            // If the file is viewable (e.g., PDF), open it in a new tab
            if (file.type === 'file') {
                window.open(`${apiConfig.url}/${file.path}`, '_blank');
            } else {
                // If it's not viewable, initiate download
                downloadFile(file);
            }
        } else {
            console.log("File is not viewable or path is missing.");
        }
    };

    const downloadFile = async (file) => {
        try {
            const response = await axios.get(`${apiConfig.url}/${file.path}`, {
                responseType: 'blob', // Important: responseType should be 'blob' for downloading files
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', file.fileName);
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error("Error downloading file:", error);
        }
    };

    return (
        <>
            {/* Start Upload resule */}
            <div className="uploading-resume">
                {maxUploadReached && <p style={{color: "red"}}>You have reached the maximum file upload limit.</p>}
                <div className="uploadButton">
                    <input
                        className="uploadButton-input"
                        type="file"
                        name="attachments[]"
                        // accept=".doc,.docx,.xml,application/msword,application/pdf, image/*"
                        accept=".doc, .docx, .pdf, .mp3, .mp4, .xml, application/msword, application/pdf, image/*, video/mp4, video/mpeg, audio/mp3"
                        id="cv_file_path"
                        multiple
                        onChange={cvManagerHandler}
                        disabled={maxUploadReached} // Disable input if max upload limit is reached

                    />
                    <label className="cv-uploadButton" htmlFor="cv_file_path">
                        <span className="title">Drag files here to upload</span>
                        <span className="text">
                            Max file size=10Mb, File Types=.doc, .docx, .pdf, .mp3, .mp4
                        </span>
                        <span className="theme-btn btn-style-one">
                            Select Files
                        </span>


                        {getError !== "" ? (
                            <p className="ui-danger mb-0">{getError}</p>
                        ) : undefined}
                    </label>
                    {/* <span className="uploadButton-file-name"></span> */}
                </div>

            </div>

            <button style={{ marginTop: "10px" }} className="theme-btn btn-style-one" onClick={uploadFiles}>Upload Files</button>

            {/* End upload-resume */}

            {/* Start resume Preview  */}
            <div className="files-outer">
                {getManager?.map((file, i) => (
                    <div key={i} className="file-edit-box">
                        <span className="title">{file.name}</span>
                        <div className="edit-btns">
                            <button>
                                <span className="la la-eye"></span>
                            </button>
                            <button onClick={() => removeFile(file.name)}>
                                <span className="la la-trash"></span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/* place the incoming files here down below */}
            <div className="files-outer">
                {userDetail.map((item, i) => (
                    <div key={i} className="file-edit-box">
                        {item.file ? (
                            <>
                                <span className="title">{item.file.fileName}</span>
                                <div className="edit-btns">
                                    <button onClick={() => onViewFile(item.file)}>
                                        <span className="la la-eye"></span>
                                    </button>
                                    <button onClick={() => deleteHandler(item.file.id)}>
                                        <span className="la la-trash"></span>
                                    </button>
                                </div>
                            </>
                        ) : (
                            <span className="title">No file available</span>
                        )}
                    </div>
                ))}
            </div>
            {/* End resume Preview  */}
        </>
    );
};

export default CvUploader;
