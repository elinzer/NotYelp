import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { getBusinessByid, deleteBusinessById } from "../../../store/business";
import EditBusinessModal from "../EditBusiness";
import CreateItemModal from "../MenuItem";
import "./BusinessDetail.css";

function BusinessDetail() {
  let currentUser;
  const [isLoaded, setIsLoaded] = useState(false);
  const [curTime, setCurTime] = useState(new Date());
  const { businessId } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const business = useSelector((state) => state.businesses[businessId]);
  const history = useHistory();
  if (business && !isLoaded) {
    setIsLoaded(true);
  } else if (!business && !isLoaded) {
    dispatch(getBusinessByid(businessId)).then(() => setIsLoaded(true));
  }

  const openStatus = () => {
    let open_time = new Date();
    open_time.setHours(business.open_time.split(":")[0]);
    let close_time = new Date();
    close_time.setHours(business.close_time.split(":")[0]);
    if (curTime > open_time && curTime < close_time) {
      return "Open";
    }
    return "Closed";
  };

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
        {/* <h1>Business Detail</h1>
        <div>{business?.name}</div>
        <div>{business?.address}</div>
        <div>{business?.description}</div>
        <div>
          <a href={business?.url}>{business?.name} Website</a>
        </div>
        <div>{business?.phone}</div>
        <div>{business?.state}</div>
        <div>{business?.city}</div>
        <div>{business?.zipcode}</div>
        <div>{business?.open_time}</div>
        <div>{business?.close_time}</div>
        <div>
          <img src={business?.preview_image} />
        </div> */}
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
                    openStatus() === "Open"
                      ? { color: "rgba(4,197,133,1)" }
                      : { color: "rgba(255,139,135,1)" }
                  }
                >
                  {openStatus()}
                </div>
                <div className="business-open-time pl5">
                  {business?.open_time} - {business?.close_time}
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
        {currentUser && (
          <div className="EditDeleteBusiness">
            <EditBusinessModal />
            <button onClick={handleDelete} className="deleteButton">
              Delete Business
            </button>
            <CreateItemModal />
          </div>
        )}
      </div>
    )
  );
}
export default BusinessDetail;
