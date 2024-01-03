
'use client'

import { useEffect, useState } from "react";
import apiConfig from "@/app.config";
import axios from "axios";

const LogoCoverUploader = ({company}) => {
    const [logoImg, setLogoImg] = useState("");
    const [converImg, setCoverImg] = useState("");

   const token = localStorage.getItem("accessToken");
 
    // logo image
    const logoHandler = (file) => {
        setLogoImg(file);
    };

    // cover image
    const coverHandler = (file) => {
        setCoverImg(file);
    };
    const uploadFiles = async () => {
        try {
          let formData = new FormData();
          formData.append("logo", logoImg);
    
          const responseLogo = await axios.post(`${apiConfig.url}/company/upload-logo`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization:`Bearer ${token}`
            },
          });
          formData  = new FormData();
          formData.append("cover", converImg);
          const responseCover =  await axios.post(`${apiConfig.url}/company/upload-cover`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization:`Bearer ${token}`

            },
          });
          if (responseLogo.status === 201 && responseCover.status == 201) {
            console.log("Files uploaded successfully");
            // You can handle success here
          } else {
            console.error("Failed to upload files");
            // You can handle errors here
          }
        } catch (error) {
          console.error("Error uploading files", error);
          // You can handle errors here
        }
      };
    return (
        <>
            <div className="uploading-outer">
                <div className="uploadButton"  style={{backgroundImage:`url(${apiConfig.url}/uploads/${company?.logo_picture_path})`,backgroundSize:'contain',backgroundPosition:'left',backgroundRepeat:'no-repeat'}}>
                    <input
                        className="uploadButton-input"
                        type="file"
                        name="attachments[]"
                        accept="image/*"
                        id="upload"
                        required
                        onChange={(e) => logoHandler(e.target.files[0])}
                    />
                    <label
                        className="uploadButton-button ripple-effect"
                        htmlFor="upload"
                    >
                        {logoImg !== "" ? logoImg?.name : " Browse Logo"}
                    </label>
                    <span className="uploadButton-file-name"></span>
                </div>
                <div className="text">
                    Max file size is 1MB, Minimum dimension: 330x300 And
                    Suitable files are .jpg & .png
                </div>
            </div>

            <div className="uploading-outer">
                <div className="uploadButton"   style={{backgroundImage:`url(${apiConfig.url}/uploads/${company?.cover_picture_path})`,backgroundSize:'contain',backgroundPosition:'left',backgroundRepeat:'no-repeat'}}>
                    <input
                        className="uploadButton-input"
                        type="file"
                        name="attachments[]"
                        accept="image/*, application/pdf"
                        id="upload_cover"
                        onChange={(e) => coverHandler(e.target.files[0])}
                    />
                    <label
                        className="uploadButton-button ripple-effect"
                        htmlFor="upload_cover"
                    >
                        {converImg !== "" ? converImg?.name : "Browse Cover"}
                    </label>
                    <span className="uploadButton-file-name"></span>
                </div>
                <div className="text">
                    Max file size is 1MB, Minimum dimension: 330x300 And
                    Suitable files are .jpg & .png
                </div>
            </div>
            <div >
                
                <button className="theme-btn btn-style-one" type="submit"  style={{marginBottom:'30px'}} onClick={uploadFiles}>
                    Upload
                </button>

            </div>
        </>
    );
};

export default LogoCoverUploader;
