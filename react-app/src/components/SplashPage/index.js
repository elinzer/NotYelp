import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BusinessCard from "../Business/BusinessCard";
import { getBusinesses } from "../../store/business";
import "./SplashPage.css";
import headerImg from "../../imgs/notyelpheader.png";
function SplashPage() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const businesses = useSelector((state) => Object.values(state.businesses));

  useEffect(() => {
    dispatch(getBusinesses()).then(() => setIsLoaded(true));
  }, [dispatch]);
  return (
    isLoaded && (
      <div className="main-splash-container">
        <div className="splash-page-details"></div>
        <div className="main-splash-image">
          <div className="main-splash-image-inner">
            <img src={headerImg} />
          </div>
        </div>
        <div className="splash-container flex flex-wrap">
          {businesses.map((business) => (
            <BusinessCard key={business?.id} business={business} />
          ))}
        </div>
      </div>
    )
  );
}
export default SplashPage;
