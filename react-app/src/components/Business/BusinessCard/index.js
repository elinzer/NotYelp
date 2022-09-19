import { Link } from "react-router-dom";
import "./BusinessCard.css";
function BusinessCard({ business }) {
  return (
    <Link className="business-card" to={`/businesses/${business.id}`}>
      <div className="business-card-image">
        {/* <img src={business.preview_image} /> */}
      </div>
      <div className="business-card-info">
        <div className="business-card-name">{business.name}</div>
        <div className="business-card-address">{business.address}</div>
        <div className="business-card-city">{business.city}</div>
        <div className="business-card-state">{business.state}</div>
        <div className="business-card-zip">{business.zip}</div>
        <div className="business-card-phone">{business.phone}</div>
        <div className="business-card-website">{business.website}</div>
      </div>
    </Link>
  );
}

export default BusinessCard;
