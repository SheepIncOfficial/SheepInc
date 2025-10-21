import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UmamiTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.umami) {
      window.umami.track(location.pathname); // Track the current route
    }
  }, [location]);

  return null; // This component doesn't render anything
};

export default UmamiTracker;

//This file is for tracking page views using Umami analytics. 
// It uses the useLocation hook from react-router-dom to get the current route and sends a tracking event to Umami whenever the route changes.