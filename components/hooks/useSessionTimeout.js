// hooks/useSessionTimeout.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const useSessionTimeout = (timeoutDuration = 30 * 60 * 1000) => { // Default: 30 minutes
  const router = useRouter();
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let timeoutId;

    const resetTimeout = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        // Log out the user
        localStorage.removeItem('token'); // Clear the JWT token
        router.push('/login'); // Redirect to login page
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