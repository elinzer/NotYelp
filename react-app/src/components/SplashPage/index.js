import { useDispatch, useSelector } from "react-redux";
import BusinessCard from "../Business/BusinessCard";
import "./SplashPage.css";
function SplashPage() {
  const dispatch = useDispatch();
  const businesses = useSelector((state) => Object.values(state.businesses));
  return (
    <div className="main-splash-container">
      <div className="splash-container flex">
        {businesses.map((business) => (
          <BusinessCard key={business?.id} business={business} />
        ))}
      </div>
    </div>
  );
}
export default SplashPage;
