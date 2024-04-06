import { useEffect, useState } from "react";
import axios from "axios";
import apiConfig from "@/app.config";


const SocialNetworkBox = () => {

  const [userDetail, setUserDetail] = useState(null);
  const [formData, setFormData] = useState({
    facebookLink: '',              
    twitterLink: '',  
    linkedinLink: '',   
    googleplusLink: '',     
  })


  const updateUser = async (data) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("No access token found");
        return;
      }

      const response = await axios.put(`${apiConfig.url}/users/profile`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Assuming the API returns the updated user details as response
      console.log('User profile updated successfully:');
      setUserDetail(response.data);
      setFormData(response.data);
      // Perform any success actions, like updating UI or state
      alert("User profile updated successfully.")
      window.location.reload();

    } catch (error) {
      console.error("Error updating user details:", error.response ? error.response.data : error);
      alert("Error updating user details.")
      // Handle errors (e.g., show error message to the user)
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
          
          setUserDetail(response.data);
          setFormData(response.data);
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };
      fetchUserDetails();
    }
  }, []);

  const handleSubmit = (event) => {

    event.preventDefault();
    // Create DTO object from form data
    const userDto = { ...formData };
    updateUser(userDto);
    // Perform any further processing or submit the DTO object

  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12"
          style={{ marginBottom: "20px" }}>
          <label>Facebook</label>
          <input
            type="text"
            name="facebookLink"
            placeholder="Facebook Link"
            value={formData.facebookLink}
            onChange={handleInputChange}
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12"
          style={{ marginBottom: "20px" }}>
          <label>Twitter</label>
          <input type="text" name="twitterLink" value={formData.twitterLink}
            onChange={handleInputChange} placeholder="Twitter Link" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Linkedin</label>
          <input type="text" name="linkedinLink" value={formData.linkedinLink}
            onChange={handleInputChange} placeholder="Linked in Link" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Google Plus</label>
          <input type="text" name="googleplusLink" value={formData.googleplusLink}
            onChange={handleInputChange} placeholder="Google Plus link" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" onClick={handleSubmit} className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default SocialNetworkBox;
