import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBusinesses } from "../../store/business";
import "./SplashPage.css";
import headerImg from "../../imgs/notyelpheader.png";
function SplashPage() {
  return (
    <div className="main-splash-container">
      <div className="main-splash-image-inner">
        <img src={headerImg} />
      </div>
      <div className="businesses-button-container">
        <button className="businesses-button">
          <Link to="/businesses" className="businesses-link">
            View All Businesses
          </Link>
        </button>
      </div>
    </div>
  );
}
export default SplashPage;
