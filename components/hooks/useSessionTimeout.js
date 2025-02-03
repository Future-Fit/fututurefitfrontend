// hooks/useSessionTimeout.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const useSessionTimeout = (timeoutDuration = 30 * 60 * 1000) => { 
  const router = useRouter();
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let timeoutId;

    const resetTimeout = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        // Log out the user
        localStorage.removeItem('accessToken'); // Clear the JWT token
        localStorage.removeItem("expiry");
        localStorage.removeItem("userType");
        localStorage.removeItem("loggedInUserId");
        router.push('/'); // Redirect to login page
      }, timeoutDuration);
    };

    // Reset timeout on user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach((event) => window.addEventListener(event, resetTimeout));

    // Initialize timeout
    resetTimeout();

    // Cleanup
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      events.forEach((event) => window.removeEventListener(event, resetTimeout));
    };
  }, [timeoutDuration, router]);

  return isActive;
};

export default useSessionTimeout;