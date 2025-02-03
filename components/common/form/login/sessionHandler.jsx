const clearSession = () => {
  try {
      console.log("Clearing session...");
      localStorage.removeItem('accessToken'); // Clear authentication token
      localStorage.removeItem('userType');    // Clear user data
      localStorage.removeItem('loggedInUserId');
      localStorage.removeItem("expiry");

      console.log("Session cleared successfully.");

      window.location.href = '/';

  } catch (error) {
      console.error("Error clearing session:", error);
  }
};
module.exports = {
  clearSession: clearSession,
};