import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { getBusinessByid } from "../../../store/business";
function BusinessDetail() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { businessId } = useParams();
  const dispatch = useDispatch();
  const business = useSelector((state) => state.businesses[businessId]);
  if (business && !isLoaded) {
    setIsLoaded(true);
  } else if (!business && !isLoaded) {
    dispatch(getBusinessByid(businessId)).then(() => setIsLoaded(true));
  }
  return (
    isLoaded && (
      <div>
        <h1>Business Detail</h1>
        <div>{business.name}</div>
        <div>{business.address}</div>
        <div>{business.description}</div>
        <div>{business.url}</div>
        <div>{business.phone}</div>
        <div>{business.state}</div>
        <div>{business.city}</div>
        <div>{business.zipcode}</div>
        <div>{business.open_time}</div>
        <div>{business.close_time}</div>
        <div>{business.preview_image}</div>
      </div>
    )
  );
}
export default BusinessDetail;
