const clearSession = () => {
  try {
      console.log("Clearing session...");
      localStorage.removeItem('accessToken'); // Clear authentication token
      localStorage.removeItem('userType');    // Clear user data
      localStorage.removeItem('loggedInUserId');

      // Additional session clearing logic if needed

      console.log("Session cleared successfully.");
  } catch (error) {
      console.error("Error clearing session:", error);
  }
};
module.exports = {
  clearSession: clearSession,
  // ... (other menu items)
};