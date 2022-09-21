import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BusinessCard from "../Business/BusinessCard";
import "./SearchPage.css";
function SearchPage() {
  const dispatch = useDispatch();
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("name");
  const businesses = useSelector((state) =>
    Object.values(state.queried_businesses)
  );
  return (
    <div className="main-search-container">
      <div className="search-header">
        {businesses.length} results found for name:{" "}
        <div id="query">"{query}"</div>
      </div>
      <div className="splash-container flex">
        {businesses.map((business) => (
          <BusinessCard key={business?.id} business={business} />
        ))}
      </div>
    </div>
  );
}
export default SearchPage;
