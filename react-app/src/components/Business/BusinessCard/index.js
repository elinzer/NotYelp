import { Link } from "react-router-dom";
import "./BusinessCard.css";
import LikeComponent from "../../Likes";
import { useState, useEffect } from "react";
import DisplayStars from "../../Reviews/DisplayStars";
const states = require("us-state-converter");
function BusinessCard({ business }) {
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [openStatus, setOpenStatus] = useState(false);
  const [curTime, setCurTime] = useState(new Date());
  useEffect(() => {
    let openTimeDate = new Date();
    let closeTimeDate = new Date();
    openTimeDate.setHours(business?.open_time.split(":")[0]);
    openTimeDate.setMinutes(business?.open_time.split(":")[1]);
    closeTimeDate.setHours(business?.close_time.split(":")[0]);
    closeTimeDate.setMinutes(business?.close_time.split(":")[1]);
    setOpenTime(
      openTimeDate.toLocaleTimeString("en-US", {
        timeStyle: "short",
      })
    );
    setCloseTime(
      closeTimeDate.toLocaleTimeString([], {
        timeStyle: "short",
      })
    );
    if (
      curTime.valueOf() > openTimeDate.valueOf() &&
      curTime.valueOf() < closeTimeDate.valueOf()
    ) {
      setOpenStatus(true);
    } else {
      setOpenStatus(false);
    }
  }, [business]);

  return (
    <div>
      <Link className="business-card" to={`/businesses/${business.id}`}>
        <div className="business-card-image">
          <img src={business.preview_image} />
        </div>
        <div className="business-card-info">
          <div className="business-card-name">{business.name}</div>
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
                openStatus
                  ? { color: "rgba(4,197,133,1)" }
                  : { color: "rgba(255,139,135,1)" }
              }
            >
              {openStatus ? "Open" : "Closed"}
            </div>
            <div className="pl5">until {openStatus ? closeTime : openTime}</div>
          </div>
          <div className="business-card-description">
            {business.description}
          </div>
        </div>
      </Link>
      <div>
        <LikeComponent business={business} />
      </div>
    </div>
  );
}

export default BusinessCard;
