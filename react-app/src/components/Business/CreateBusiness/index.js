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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const businessData = {
      owner_id: user.id,
      name,
      address,
      url,
      phone,
      city,
      state,
      zipCode,
      openTime,
      closeTime,
      description,
    };
    const newBusiness = await dispatch(createBusiness(businessData));
    if (newBusiness.errors) {
      console.log("errors", newBusiness.errors);
      setErrors(newBusiness.errors);
    } else if (newBusiness) {
      console.log("newBusiness", newBusiness);
    }
    // console.log(newBusiness);
    // if(newBusiness){
    //   setIsSubmitted(true);
    //   console.log("New Business:", newBusiness)
    //   // history.push(`/businesses/${newBusiness.id}`);
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          value={address}
          name="address"
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div>
        <label>URL</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div>
        <label>City</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>
      <div>
        <label>State</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Zip Code</label>
        <input
          type="number"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Open Time</label>
        <input
          type="time"
          value={openTime}
          onChange={(e) => setOpenTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Close Time</label>
        <input
          type="time"
          value={closeTime}
          onChange={(e) => setCloseTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Business</button>
    </form>
  );
}

export default BusinessCreateForm;
