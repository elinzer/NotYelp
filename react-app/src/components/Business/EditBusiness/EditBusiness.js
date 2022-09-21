import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editBusiness, getBusinessByid } from "../../../store/business";
import { maskPhoneNumber, returnDigitsOnly } from "../../../helpers/phoneMask";
const imageURLRegex = /\.(jpeg|jpg|png)$/;

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
  const [openTime, setOpenTime] = useState(business?.open_time);
  const [closeTime, setCloseTime] = useState(business?.close_time);
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
    if (!previewUrl.match(imageURLRegex)) {
      errors.push(
        "preview_url: Preview url must end in valid img extension [png/jpg/jpeg]"
      );
    }
    if (String(zipCode).length !== 5) {
      errors.push("zipcode: Zipcode must be 5 digits");
    }
    if (address.length < 6) {
      errors.push("address: Address must be at least 5 characters");
    }
    if (address.length > 50) {
      errors.push("address: Address must be less than 50 characters");
    }
    if (state.length > 15) {
      errors.push("state: State must be less than 15 characters");
    }
    if (city.length > 35) {
      errors.push("city: City must be less than 35 characters");
    }
    setErrors(errors);
  }, [previewUrl, zipCode, address, url, city, state]);

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
        <div className="updateTitle">Update Business</div>
        <div>
          {isSubmitted &&
            errors.map((error, idx) => (
              <div key={idx} className="editError">
                {error.split(": ")[1]}
              </div>
            ))}
        </div>
        <label>
          <input
            className="editName"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            className="editAddress"
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            className="editUrl"
            type="text"
            placeholder="Url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            className="editPhone"
            type="tel"
            name="phone"
            value={maskPhoneNumber(phone)}
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            className="editCity"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            className="editState"
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            className="editZipCode"
            type="number"
            placeholder="ZipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            className="editOpenTime"
            type="time"
            placeholder="OpenTime"
            value={openTime}
            onChange={(e) => setOpenTime(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            className="editCloseTime"
            type="time"
            placeholder="CloseTime"
            value={closeTime}
            onChange={(e) => setCloseTime(e.target.value)}
            required
          />
        </label>
        <label>
          <textarea
            className="editDescription"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            className="editPreviewUrl"
            type="text"
            placeholder="PreviewUrl"
            value={previewUrl}
            onChange={(e) => setPreviewUrl(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="editBusinessBut">
          Update Your Business
        </button>
      </form>
    )
  );
}

export default BusinessEditForm;
