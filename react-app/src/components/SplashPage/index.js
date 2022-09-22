import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BusinessCard from "../Business/BusinessCard";
import { getBusinesses } from "../../store/business";
import "./SplashPage.css";
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
        <div className="splash-page-details">
          <h1>Welcome to NotYelp!</h1>
        </div>
        <div className="main-splash-image">
          {/* probs placeholder idfk we pick tomorrow LOL */}
          <div className="main-splash-image-inner">
            <img src="https://s3-media0.fl.yelpcdn.com/educatorphoto/T3U8OES-w0Pat6ijyqf8pg/o.jpg" />
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
