import { Link } from "react-router-dom";
import "./BusinessCard.css";
import LikeComponent from "../../Likes";
import { useState, useEffect } from "react";
import DisplayStars from "../../Reviews/DisplayStars";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import defaultPreview from "../../../imgs/notyelpbusiness.png";

const states = require("us-state-converter");
function BusinessCard({ business }) {
  const sessionUser = useSelector((state) => state.session.user);
  let openTime = new Date();
  let closeTime = new Date();
  openTime.setUTCHours(...business.open_time.split(":"));
  closeTime.setUTCHours(...business.close_time.split(":"));
  return (
    <div className="temp">
      <div className="business-card" to={`/businesses/${business.id}`}>
        <div className="business-card-outer">
          <Link
            className="business-card-image"
            to={`/businesses/${business.id}`}
          >
            <img
              src={business.preview_image}
              onError={(e) => (e.target.src = defaultPreview)}
            />
          </Link>
          {/* {sessionUser && <LikeComponent business={business} />} */}
        </div>
        <div className="business-card-info">
          <Link
            className="business-card-name"
            to={`/businesses/${business.id}`}
          >
            {business.name}
          </Link>
          <div className="business-address-container flex">
            {business.address} {business.city}, {states.abbr(business.state)}
          </div>
          <div className="card-review-data flex">
            <div className="review-avg-stars">
              <DisplayStars rating={business?.avg_rating} />
            </div>
            <div className="review-count pl10">
              {business?.review_ids.length == 1 ? (
                <div>{business?.review_ids.length} review</div>
              ) : (
                <div>{business?.review_ids.length} reviews</div>
              )}
            </div>
          </div>
          <div className="business-hours flex">
            <div
              className="business-open-status"
              style={
                business?.open_status
                  ? { color: "rgba(4,197,133,1)" }
                  : { color: "rgba(255,139,135,1)" }
              }
            >
              {business?.open_status ? "Open" : "Closed"}
            </div>
            <div className="pl5">
              until{" "}
              {business?.open_status
                ? closeTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })
                : openTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
            </div>
          </div>
          <div className="business-card-description">
            {business.description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessCard;
