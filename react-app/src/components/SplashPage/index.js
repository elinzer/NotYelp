import { useDispatch, useSelector } from "react-redux";
import BusinessCard from "../Business/BusinessCard";
import "./SplashPage.css";
function SplashPage() {
  const dispatch = useDispatch();
  const businesses = useSelector((state) => Object.values(state.businesses));
  // https://s3-media0.fl.yelpcdn.com/educatorphoto/T3U8OES-w0Pat6ijyqf8pg/o.jpg
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
