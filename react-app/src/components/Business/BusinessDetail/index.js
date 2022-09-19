import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { getBusinessByid, deleteBusinessById } from "../../../store/business";
import ItemCard from "../ItemCard";
import EditBusinessModal from "../EditBusiness";
import CreateItemModal from "../MenuItem";
import "./BusinessDetail.css";

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
  const reviewState = useSelector((state) => state.reviews);
  const items = useSelector((state) => state.items);
  const reviews = Object.values(reviewState);
  const history = useHistory();
  if (business && !isLoaded) {
    setIsLoaded(true);
  } else if (!business && !isLoaded) {
    dispatch(getBusinessByid(businessId)).then(() => setIsLoaded(true));
  }

  useEffect(() => {
    let openTimeDate = new Date();
    let closeTimeDate = new Date();
    openTimeDate.setHours(business.open_time.split(":")[0]);
    openTimeDate.setMinutes(business.open_time.split(":")[1]);
    closeTimeDate.setHours(business.close_time.split(":")[0]);
    closeTimeDate.setMinutes(business.close_time.split(":")[1]);
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
              <div className="business-actions-container">
                {currentUser && (
                  <div className="EditDeleteBusiness">
                    <EditBusinessModal />
                    <button onClick={handleDelete} className="deleteButton">
                      Delete Business
                    </button>
                    {/* Item Modal might make more sense to go in menu, unsure atm */}
                    <CreateItemModal businessId={business.id} />
                  </div>
                )}
              </div>
              <div className="business-menu-container">
                Menu:
                {/* Show every Item Card Here */}
                {business?.menuitem_ids.map((itemId) => (
                  <ItemCard key={itemId} item={items[itemId]} />
                ))}
              </div>
              <div className="business-info-container">
                <div className="business-owner-info">
                  {/* Owner Info i.e Picture/Name */}
                </div>
                <div className="business-description">
                  {/* Business Description */}
                </div>
              </div>
              <div className="business-reviews-container">
                {/* Show every Review Card Here */}
                Reviews:
                {reviews.map((review) => {
                  if (review.business_id == businessId)
                    return (
                      <div key={review.id}>
                        {/* ReviewCard will go here */}
                        Stars: {review.stars} Review: {review.review}
                      </div>
                    );
                })}
              </div>
            </div>
            <div className="business-contact-container">
              <div className="business-website">
                <a href={business?.url}>{business?.url}</a>
              </div>
              <div className="business-phone">{business?.phone}</div>
              <div className="business-address">
                {business?.address} {business?.city}, {business?.state}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
export default BusinessDetail;
