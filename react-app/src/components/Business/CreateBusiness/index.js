import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { createBusiness } from "../../../store/business";
const imageURLRegex = /\.(jpeg|jpg|png)$/;

function BusinessCreateForm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [url, setUrl] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [description, setDescription] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const businessData = {
      owner_id: user.id,
      name,
      address,
      url,
      phone,
      city,
      state,
      zipcode: zipCode,
      open_time: openTime,
      close_time: closeTime,
      description,
      preview_image: previewUrl,
    };
    const newBusiness = await dispatch(createBusiness(businessData));
    if (newBusiness.errors) {
      console.log("errors", newBusiness.errors);
      setErrors(newBusiness.errors);
      console.log("errors two:", errors);
    } else if (newBusiness) {
      console.log("newBusiness", newBusiness);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error.split(": ")[1]}</div>
        ))}
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          value={address}
          name="address"
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="url">URL</label>
        <input
          type="text"
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="zipcode">Zip Code</label>
        <input
          type="number"
          name="zipcode"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="previewUrl">Preview Image URL</label>
        <input
          type="url"
          name="previewUrl"
          value={previewUrl}
          onChange={(e) => setPreviewUrl(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="open_time">Open Time</label>
        <input
          type="time"
          name="open_time"
          value={openTime}
          onChange={(e) => setOpenTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="close_time">Close Time</label>
        <input
          type="time"
          name="close_time"
          value={closeTime}
          onChange={(e) => setCloseTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          value={description}
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button name="submit" type="submit">
        Create Business
      </button>
    </form>
  );
}

export default BusinessCreateForm;
