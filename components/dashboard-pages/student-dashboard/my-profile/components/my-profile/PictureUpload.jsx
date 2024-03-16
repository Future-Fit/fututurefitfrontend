import apiConfig from "@/app.config";
import { useState } from "react";
import axios from "axios";

const PictureUpload = () => {
    const [file, setFile] = useState(null);

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

    return (
        <>
            <div className="uploading-outer">
                <div className="uploadButton">
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
                    <button className="theme-btn btn-style-one" onClick={handleSubmit}>Upload Image</button>
                </div>
                <div className="text">
                    Max File Size: 1MB, Min Dimension: 330x300, File Types: jpg, png
                </div>
            </div>
        </>
    );
};

export default PictureUpload;

// import apiConfig from "@/app.config";
// import { useState } from "react";
// import axios from "axios";

// const PictureUpload = async () => {
//     const [file, setFile] = useState(null);
//     const [formData, setFormData] = useState({
//         user_image: ''
//       });
//     const handleFileChange = (e) => {
//         // setFile(e.target.files[0]); // Store the selected file

//         setFormData({
//             ...formData,
//             [name]: value,
//           });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (!file) {
//           console.error("Please select a file before uploading.");
//           return;
//         }

//         // const formData = new FormData();
//         // formData.append('user_image', file); // Append the file

//     // Create DTO object from form data
//     const userDto = { ...formData };
//     updateUser(userDto);

//         try {
//             const token = localStorage.getItem("accessToken");
//             if (!token) {
//                 console.error("No access token found");
//                 return;
//             }

//             const response = await axios.put(`${apiConfig.url}/users/profile`, formData, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                     // Content-Type header for FormData is automatically set by the browser
//                 },
//             });

//             console.log('User updated successfully:', response.data);
//             // Handle success actions
//         } catch (error) {
//             console.error("Error updating user details:", error.response ? error.response.data : error);
//             // Handle errors
//         }
//     };

//     return (
//         <>
//             <div className="uploading-outer">
//                 <div className="uploadButton">
//                     <input
//                         className="uploadButton-input"
//                         type="file"
//                         name="user_image" // Updated the name attribute to match the backend expectation
//                         accept="image/*"
//                         id="upload"
//                         required
//                         onChange={handleFileChange} // Updated to use the correct handler
//                     />
//                     <label
//                         className="uploadButton-button ripple-effect"
//                         htmlFor="upload"
//                     >
//                         {file ? file.name : "Profile Picture"}
//                     </label>
//                     <button className="theme-btn btn-style-one" onClick={handleSubmit}>Upload Image</button>
//                 </div>
//                 <div className="text">
//                     Max File Size: 1MB, Min Dimension: 330x300,
//                     File Types: jpg, png
//                 </div>
//             </div>
//         </>
//     );
// };

// export default PictureUpload;

// // 'use client'

// // import apiConfig from "@/app.config";
// // import { useState } from "react";
// // import axios from "axios";


// // const PictureUpload = async () => {


// //     const [file, setFile] = useState(null);

// //     const handleFileChange = (e) => {
// //         setFile(e.target.files[0]); // Assuming you're interested in the first file only
// //     };


// //     const handleSubmit = (event) => {
// //         event.preventDefault();
      
// //         const formData = new FormData();
// //         // Append text fields to formData
// //         for (const [key, value] of Object.entries(formData)) {
// //           formData.append(key, value);
// //         }
// //         // Append file to formData if it exists
// //         if (file) {
// //           formData.append('user_image', file);
// //         }
      
// //         updateUser(formData);
// //       };
      

// //     const [logImg, setLogoImg] = useState("");
// //     const logImgHander = (e) => {
// //         setLogoImg(e.target.files[0]);
// //     };
// //     const updateUser = async (formData) => {
// //         try {
// //           const token = localStorage.getItem("accessToken");
// //           if (!token) {
// //             console.error("No access token found");
// //             return;
// //           }
      
// //           const response = await axios.put(`${apiConfig.url}/users/profile`, formData, {
// //             headers: {
// //               Authorization: `Bearer ${token}`,
// //               // Do not set Content-Type for FormData; Axios and the browser will handle it
// //             },
// //           });
      
// //           console.log('User updated successfully:', response.data);
// //           // Handle success actions
// //         } catch (error) {
// //           console.error("Error updating user details:", error.response ? error.response.data : error);
// //           // Handle errors
// //         }
// //       };
      

// //     return (
// //         <>
// //             <div className="uploading-outer">
// //                 <div className="uploadButton">
// //                     <input
// //                         className="uploadButton-input"
// //                         type="file"
// //                         name="attachments[]"
// //                         accept="image/*"
// //                         id="upload"
// //                         required
// //                         onChange={logImgHander}
// //                     />
// //                     <label
// //                         className="uploadButton-button ripple-effect"
// //                         htmlFor="upload"
// //                     >
// //                         {logImg !== "" ? logImg.name : "Profile Picture"}
// //                     </label>
// //                     <button className="theme-btn btn-style-one" onClick={handleSubmit}>Upload Image</button>
// //                     <span className="uploadButton-file-name"></span>
// //                 </div>
// //                 <div className="text">
// //                     Max File Size: 1MB, Min Dimension: 330x300,
// //                     File Types: jpg, png
// //                 </div>
// //             </div>
// //         </>
// //     );
// // };

// // export default PictureUpload;
