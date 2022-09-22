import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBusinesses } from "../../../store/business";
import BusinessCard from "../BusinessCard";
function BusinessesPage() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const businesses = useSelector((state) => Object.values(state.businesses));

  useEffect(() => {
    dispatch(getBusinesses()).then(() => setIsLoaded(true));
  }, [dispatch]);
  return (
    isLoaded && (
      <div className="main-splash-container">
        <div className="splash-container flex flex-wrap">
          {businesses.map((business) => (
            <BusinessCard key={business?.id} business={business} />
          ))}
        </div>
      </div>
    )
  );
}
export default BusinessesPage;
