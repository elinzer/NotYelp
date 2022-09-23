import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editBusiness, getBusinessByid } from "../../../store/business";
import { maskPhoneNumber, returnDigitsOnly } from "../../../helpers/phoneMask";
import { timeStringFormat, utcToLocale } from "../../../helpers/dateHelpers";
const imageURLRegex = /\.(jpeg|jpg|png)$/;
const zipCodeRegex = /^\d{5}$/;
const states = require("us-state-converter");
function BusinessEditForm({ closeModal }) {
  const { businessId } = useParams();
  const dispatch = useDispatch();
  // const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const business = useSelector((state) => state.businesses[businessId]);

  const [name, setName] = useState(business?.name);
  const [address, setAddress] = useState(business?.address);
  const [url, setUrl] = useState(business?.url);
  const [phone, setPhone] = useState(business?.phone);
  const [city, setCity] = useState(business?.city);
  const [state, setState] = useState(business?.state);
  const [zipCode, setZipCode] = useState(business?.zipcode);
  const [openTime, setOpenTime] = useState(utcToLocale(business?.open_time));
  const [closeTime, setCloseTime] = useState(utcToLocale(business?.close_time));
  const [description, setDescription] = useState(business?.description);
  const [previewUrl, setPreviewUrl] = useState(business?.preview_image);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  if (business && !isLoaded) {
    setIsLoaded(true);
  } else if (!business && !isLoaded) {
    dispatch(getBusinessByid(businessId)).then(() => setIsLoaded(true));
  }
  useEffect(() => {
    const errors = [];
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
  }, [previewUrl, zipCode, address, url, city]);

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
    const data = await dispatch(editBusiness(businessData, business.id));
    if (data && data.errors) {
      setErrors(data.errors);
    } else if (data && !data.errors && !errors.length) {
      closeModal();
      dispatch(getBusinessByid(businessId));
    }
  };
  return (
    isLoaded && (
      <form onSubmit={handleSubmit} className="editForm">
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
              Update Your Business
            </button>
          </div>
        </div>
      </form>
    )
  );
}

export default BusinessEditForm;
