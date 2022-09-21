import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { createBusiness } from "../../../store/business";
import { maskPhoneNumber, returnDigitsOnly } from "../../../helpers/phoneMask";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (errors.length) return null;
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
      open_time: openTime,
      close_time: closeTime,
      description,
      preview_image: previewUrl,
    };
    const newBusiness = await dispatch(createBusiness(businessData));
    console.log("newBusiness:", newBusiness);
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
    if (String(zipCode).length !== 5) {
      errors.push("zipcode: Zipcode must be 5 digits");
    }
    if (address.length < 5) {
      errors.push("address: Address must be at least 5 characters");
    }
    setErrors(errors);
  }, [previewUrl, zipCode, address]);

  return (
    <div className="createBusinessBox">
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
          <div>
            <label htmlFor="name" />
            <input
              type="text"
              value={name}
              className="nameInput"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="address" />
            <input
              type="text"
              value={address}
              className="addressInput"
              placeholder="Address"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="url" />
            <input
              type="text"
              name="url"
              value={url}
              className="urlInput"
              placeholder="URL"
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phone" />
            <input
              type="tel"
              name="phone"
              value={phone}
              className="phoneInput"
              placeholder="Phone Number"
              onChange={(e) => setPhone(maskPhoneNumber(e.target.value))}
              required
            />
          </div>
          <div>
            <label htmlFor="city" />
            <input
              type="text"
              name="city"
              value={city}
              className="cityInput"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="state" />
            <input
              type="text"
              name="state"
              value={state}
              className="stateInput"
              placeholder="State"
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="zipcode" />
            <input
              type="number"
              name="zipcode"
              value={zipCode}
              className="zipcodeInput"
              placeholder="Zip Code"
              onChange={(e) => setZipCode(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="previewUrl" />
            <input
              type="url"
              name="previewUrl"
              value={previewUrl}
              className="previewUrlInput"
              placeholder="Preview Image URL"
              onChange={(e) => setPreviewUrl(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="open_time" className="opentimeTitle">
              Open-Time
            </label>
            <div>
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
          <div>
            <label htmlFor="description" />
            <textarea
              name="description"
              value={description}
              className="descriptionInput"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button name="submit" type="submit" className="submitButton">
            Create Business
          </button>
        </div>
      </form>
    </div>
  );
}

export default BusinessCreateForm;
