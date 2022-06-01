import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFilter } from "contexts/FilterContext";

export const usePageViewTracker = () => {
  const location = useLocation();
  const [lastLocation, setLastLocation] = useState("");
  const { setSearchIp, dispatchFilter } = useFilter();

  useEffect(() => {
    if (lastLocation.pathname === "/products") {
      dispatchFilter({ type: "CLEAR_ALL" });
      setSearchIp("");
    }
    setLastLocation(location);
  }, [location]);

  return [location, lastLocation];
};
