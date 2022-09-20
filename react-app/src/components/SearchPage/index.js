import { useDispatch, useSelector } from "react-redux";
import BusinessCard from "../Business/BusinessCard";
import "./SearchPage.css";
function SearchPage() {
  const dispatch = useDispatch();
  const businesses = useSelector((state) =>
    Object.values(state.queried_businesses)
  );
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
export default SearchPage;
