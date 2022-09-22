import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getBusinessByid, deleteBusinessById } from "../../../store/business";
import ItemCard from "../ItemCard";
import CreateReviewModal from "../../Reviews/ReviewModal";
import EditBusinessModal from "../EditBusiness";
import CreateItemModal from "../MenuItem";
import "./BusinessDetail.css";
// import EditReviewModal from "../../Reviews/EditReviewModal";
// import { deleteReviewById, editReview } from "../../../store/review";
import ReviewCard from "../../Reviews/ReviewCard";
import DisplayStars from "../../Reviews/DisplayStars";
import LikeComponent from "../../Likes";
import defaultPreview from "../../../imgs/notyelpbusiness.png";
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
  const likeState = useSelector((state) => state.likes);
  const likes = Object.values(likeState);
  const reviews = useSelector((state) => state.reviews);
  const items = useSelector((state) => state.items);
  const history = useHistory();

  useEffect(() => {
    dispatch(getBusinessByid(businessId)).then(() => setIsLoaded(true));
  }, []);

  let loveCount = 0;
  let okayCount = 0;
  let trashCount = 0;

  for (let i = 0; i < likes.length; i++) {
    let like = likes[i];
    console.log(like)
    if (businessId == like.business_id) {
      console.log('do u get in here')
      if (like.like === 3) {
        loveCount += 1;
      } else if (like.like === 2) {
        okayCount += 1;
      } else if (like.like === 1) {
        trashCount += 1;
      }
    }
  }


  const handleDelete = async (e) => {
    e.preventDefault();
    setIsLoaded(false);
    await dispatch(deleteBusinessById(businessId));
    await history.push("/");
  };

  const alreadyReviewed = () => {
    let alreadyReviewedByUser = false;
    for (let i of business?.review_ids) {
      if (reviews[i]?.user_id === sessionUser.id) {
        alreadyReviewedByUser = true;
      }
    }
    return alreadyReviewedByUser;
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
                <DisplayStars rating={business?.avg_rating} />
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
                <div className="business-open-time pl5">
                  {business?.format_open} - {business?.format_close}
                </div>
              </div>
            </div>
          </div>
          <div className="photo-inner-container">
            <img
              className="business-preview-image"
              src={business?.preview_image}
              onError={(e) => (e.target.src = defaultPreview)}
            />
          </div>
        </div>
        <div className="pt20">
          <div className="business-details-container flex">
            <div className="business-details">
              <div className="business-actions-container flex">
                {sessionUser &&
                  sessionUser.id !== business?.owner_id &&
                  alreadyReviewed() === false && (
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
              <div className="business-about-container">
                <div className="about-header">About</div>
                <div className="about-content">{business?.description}</div>
              </div>
              <div className="business-reviews-container">
                {/* Show every Review Card Here */}
                <div className="reviews-header header">Reviews</div>
                <div className="reviews-inner-container">
                  {business?.review_ids.length ? (
                    business?.review_ids.map((reviewId) => (
                      <ReviewCard key={reviewId} review={reviews[reviewId]} />
                    ))
                  ) : (
                    <div style={{ paddingBottom: "25px" }}>
                      No reviews. Yet...
                    </div>
                  )}
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
              <div className="likes-container">
                {sessionUser && (
                  <div className="likes-component">
                    <LikeComponent business={business} />
                  </div>
                )}
                <ul className="likes-ul">
                  <li style={{ fontWeight: "bold" }}>
                    Too lazy to read the reviews? Here's what people are saying:
                  </li>
                  <li className="likes-li">
                    {`${loveCount} ${
                      loveCount === 1 ? "person loves" : "people love"
                    } this place`}
                  </li>
                  <li className="likes-li">{`${okayCount} ${
                    okayCount === 1 ? "person says" : "people say"
                  } this place is okay`}</li>
                  <li className="likes-li">
                    {`${trashCount} ${
                      trashCount === 1 ? "person dislikes" : "people dislike"
                    } this place`}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
export default BusinessDetail;
