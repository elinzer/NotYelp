import { useDispatch, useSelector } from "react-redux";
import BusinessCard from "../Business/BusinessCard";
import "./SplashPage.css";
function SplashPage() {
  const dispatch = useDispatch();
  const businesses = useSelector((state) => Object.values(state.businesses));
  return (
    <div className="main-splash-container">
      {/* <h1>Welcome to the Splash Page!</h1> */}
      <div className="splash-container flex">
        {businesses.map((business) => (
          <BusinessCard business={business} />
        ))}
      </div>
    </div>
  );
}
export default SplashPage;
