
'use client'

import { useState } from "react";
import axios from 'axios';
import apiConfig from "@/app.config";

// validation chaching
function checkFileTypes(files) {
    const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    for (let i = 0; i < files.length; i++) {
        if (!allowedTypes.includes(files[i].type)) {
            return false;
        }
    }
    return true;
}

const CvUploader = () => {
    const [getManager, setManager] = useState([]);
    const [getError, setError] = useState("");
    const token = localStorage.getItem("accessToken");
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
                console.log('Upload successful', response.data);
                // Handle success (e.g., showing a success message, removing the file from getManager, etc.)
            } catch (error) {
                console.error('Upload failed', error);
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
                setError("Only accept  (.doc, .docx, .pdf) file");
            }
        } else {
            setError("File already exists");
        }
    };

    // delete image
    const deleteHandler = (name) => {
        const deleted = getManager?.filter((file) => file.name !== name);
        setManager(deleted);
    };

    return (
        <>
            {/* Start Upload resule */}
            <div className="uploading-resume">
                <div className="uploadButton">
                    <input
                        className="uploadButton-input"
                        type="file"
                        name="attachments[]"
                        accept=".doc,.docx,.xml,application/msword,application/pdf, image/*"
                        id="cv_file_path"
                        multiple
                        onChange={cvManagerHandler}
                    />
                    <label className="cv-uploadButton" htmlFor="cv_file_path">
                        <span className="title">Drop files here to upload</span>
                        <span className="text">
                            To upload file size is (Max 5Mb) and allowed file
                            types are (.doc, .docx, .pdf)
                        </span>
                        <span className="theme-btn btn-style-one">
                            Select Files
                        </span>


                        {getError !== "" ? (
                            <p className="ui-danger mb-0">{getError}</p>
                        ) : undefined}
                    </label>
                    <span className="uploadButton-file-name"></span>
                </div>

            </div>

            <button className="theme-btn btn-style-one" onClick={uploadFiles}>Upload Files</button>

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
                            <button onClick={() => deleteHandler(file.name)}>
                                <span className="la la-trash"></span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/* End resume Preview  */}
        </>
    );
};

export default CvUploader;
