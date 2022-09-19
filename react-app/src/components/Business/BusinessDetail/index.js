import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { getBusinessByid, deleteBusinessById } from "../../../store/business";
import ItemCard from "../ItemCard";
import CreateReviewModal from "../../Reviews/ReviewModal";
import EditBusinessModal from "../EditBusiness";
import CreateItemModal from "../MenuItem";
import EditReviewModal from "../../Reviews/EditReviewModal";
import "./BusinessDetail.css";
import { deleteReviewById, editReview } from "../../../store/review";
import ReviewCard from "../../Reviews/ReviewCard";
const states = require("us-state-converter");

function BusinessDetail() {
  let currentUser;
  const [isLoaded, setIsLoaded] = useState(false);
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [openStatus, setOpenStatus] = useState(false);
  const [curTime, setCurTime] = useState(new Date());
  const { businessId } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const business = useSelector((state) => state.businesses[businessId]);
  const reviews = useSelector((state) => state.reviews);
  const items = useSelector((state) => state.items);
  const history = useHistory();
  if (business && !isLoaded) {
    setIsLoaded(true);
  } else if (!business && !isLoaded) {
    dispatch(getBusinessByid(businessId)).then(() => setIsLoaded(true));
  }

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

  //if the user has already reviewed the spot then the input box for reviews will not show up
  // const alreadyReviewed = (reviews) => {
  //   let alreadyReviewedByUser = false;
  //   for (let i = 0; i < reviews.length; i++) {
  //     if (reviews[i].user_id === sessionUser.id) {
  //       alreadyReviewedByUser = true;
  //     }
  //   }
  //   return alreadyReviewedByUser;
  // };

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteBusinessById(businessId));
    history.push("/");
  };

  if (sessionUser && business) {
    if (sessionUser.id === business.owner_id) {
      currentUser = true;
    } else currentUser = false;
  }
  return (
    isLoaded && (
      <div>
        <div className="photo-outer-container">
          <div className="details-container">
            <div className="details">
              <div className="details-name">{business?.name}</div>
              <div className="details-review-data flex">
                <div className="review-avg-stars">✰✰✰✰✰</div>
                <div className="review-count pl10">
                  {business?.review_ids.length}
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
                <div className="business-open-time pl5">
                  {openTime} - {closeTime}
                </div>
              </div>
            </div>
          </div>
          <div className="photo-inner-container">
            <img
              className="business-preview-image"
              src={business?.preview_image}
            />
          </div>
        </div>
        <div className="pt20">
          <div className="business-details-container flex">
            <div className="business-details">
              <div className="business-actions-container flex">
                {sessionUser && (
                  <div>
                    <CreateReviewModal business={business} />
                  </div>
                )}
                {currentUser && (
                  <div className="EditDeleteBusiness flex">
                    <CreateItemModal businessId={business.id} />
                    <EditBusinessModal />
                    <button
                      onClick={handleDelete}
                      className="deleteButton clear-button"
                    >
                      Delete Business
                    </button>
                    {/* Item Modal might make more sense to go in menu, unsure atm */}
                  </div>
                )}
              </div>
              <div className="business-menu-container">
                <div className="menu-header">Menu</div>
                {/* Show every Item Card Here */}
                <div className="menu-items flex flex-wrap">
                  {business?.menuitem_ids.map((itemId) => (
                    <ItemCard key={itemId} item={items[itemId]} />
                  ))}
                </div>
              </div>
              <div className="business-reviews-container">
                {/* Show every Review Card Here */}
                <div className="reviews-header">Reviews</div>
                <div className="reviews-inner-container">
                  {business?.review_ids.map((reviewId) => (
                    <ReviewCard key={reviewId} review={reviews[reviewId]} />
                  ))}
                </div>
              </div>
            </div>
            <div className="business-contact-outer-container">
              <div className="business-contact-container">
                <div className="business-website">
                  <a href={business?.url}>{business?.url}</a>
                </div>
                <div className="business-phone">{business?.phone}</div>
                <div className="business-address">
                  {business?.address} {business?.city},{" "}
                  {states.abbr(business?.state)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
export default BusinessDetail;
