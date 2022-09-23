import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createBusiness } from "../../../store/business";
import { maskPhoneNumber, returnDigitsOnly } from "../../../helpers/phoneMask";
import { timeStringFormat } from "../../../helpers/dateHelpers";
function BusinessCreateForm({ closeModal }) {
  const imageURLRegex = /\.(jpeg|jpg|png)$/;
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
  const zipCodeRegex = /^\d{5}$/;
  const states = require("us-state-converter");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setErrors([]);
    const businessData = {
      owner_id: user.id,
      name,
      address,
      url,
      phone: returnDigitsOnly(phone),
      city,
      state,
      zipcode: zipCode,
      open_time: timeStringFormat(openTime),
      close_time: timeStringFormat(closeTime),
      description,
      preview_image: previewUrl,
    };
    const newBusiness = await dispatch(createBusiness(businessData));
    if (newBusiness && newBusiness.errors) {
      setErrors(newBusiness.errors);
    } else if (newBusiness && !newBusiness.errors) {
      closeModal();
      history.push(`/businesses/${newBusiness.id}`);
    }
  };

  useEffect(() => {
    const errors = [];
    if (!previewUrl.match(imageURLRegex)) {
      errors.push(
        "preview_url: Preview url must end in valid img extension [png/jpg/jpeg]"
      );
    }

    if (name.length > 50) {
      errors.push("name: Name must be less than 50 characters");
    }
    if (name.length < 5) {
      errors.push("name: Name must be at least 5 characters");
    }
    if (!zipCode.match(zipCodeRegex)) {
      errors.push("zipcode: Zipcode must be 5 digits");
    }
    if (address.length < 6) {
      errors.push("address: Address must be at least 6 characters");
    }
    if (address.length > 50) {
      errors.push("address: Address must be less than 50 characters");
    }
    if (String(returnDigitsOnly(phone)).length !== 10) {
      errors.push("phone: Phone must be 10 numbers");
    }
    if (city.length > 35) {
      errors.push("city: City must be less than 35 characters");
    }
    if (city.length < 5) {
      errors.push("city: City must be at least 5 characters");
    }

    setErrors(errors);
  }, [previewUrl, zipCode, address, url, city, phone, name]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="createBusinessBox">
        <div className="CreateBusTitle">Create Your Business</div>
        {isSubmitted &&
          errors.map((error, ind) => (
            <div className="createErrors">
              <div key={ind} className="createError">
                {error.split(": ")[1]}
              </div>
            </div>
          ))}
        <div className="input-container">
          <div className="inputItem">
            <input
              type="text"
              value={name}
              className="nameInput"
              placeholder=" "
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="inputItem">
            <input
              type="text"
              value={address}
              className="addressInput"
              placeholder=" "
              name="address"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <label htmlFor="address">Address</label>
          </div>
          <div className="inputItem">
            <input
              type="url"
              name="url"
              value={url}
              className="urlInput"
              placeholder=" "
              onChange={(e) => setUrl(e.target.value)}
              required
            />
            <label htmlFor="url">Url</label>
          </div>
          <div className="inputItem">
            <input
              type="tel"
              name="phone"
              value={phone}
              className="phoneInput"
              placeholder=" "
              onChange={(e) => setPhone(maskPhoneNumber(e.target.value))}
              required
            />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className="inputItem">
            <input
              type="text"
              name="city"
              value={city}
              className="cityInput"
              placeholder=" "
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <label htmlFor="city">City</label>
          </div>
          <div className="state-select-container">
            <select
              className="state-select"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            >
              {states().map((state, idx) => (
                <option key={idx} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div className="inputItem">
            <input
              type="text"
              name="zipcode"
              value={zipCode}
              className="zipcodeInput"
              placeholder=" "
              onChange={(e) => setZipCode(e.target.value)}
              required
            />
            <label htmlFor="zipcode">Zip</label>
          </div>
          <div className="inputItem">
            <input
              type="url"
              name="previewUrl"
              value={previewUrl}
              className="previewUrlInput"
              placeholder=" "
              onChange={(e) => setPreviewUrl(e.target.value)}
              required
            />
            <label htmlFor="previewUrl">Image Url</label>
          </div>
          <div>
            <label htmlFor="open_time" className="opentimeTitle">
              Open-Time
            </label>
            <div className="inputItem">
              <input
                type="time"
                name="open_time"
                value={openTime}
                className="openTimeInput"
                onChange={(e) => setOpenTime(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="close_time" className="closetimeTitle">
              Close-Time
            </label>
            <div>
              <input
                type="time"
                name="close_time"
                value={closeTime}
                className="closeTimeInput"
                onChange={(e) => setCloseTime(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="inputItem desc-input">
            <textarea
              name="description"
              value={description}
              className="descriptionInput"
              placeholder=" "
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <label className="desc-label" htmlFor="description">
              Description
            </label>
          </div>
          <button name="submit" type="submit" className="submitButton">
            Create Business
          </button>
        </div>
      </div>
    </form>
  );
}

export default BusinessCreateForm;
