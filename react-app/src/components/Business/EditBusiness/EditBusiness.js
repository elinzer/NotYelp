import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { editBusiness, getBusinessByid } from "../../../store/business";
const imageURLRegex = /\.(jpeg|jpg|png)$/;

function BusinessEditForm() {
  const { businessId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
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

  // useEffect(() => {
  //   const errors = [];
  //   if (name === '') errors.push("Business name is required")
  //   if (address === '') errors.push("Street address is required")
  //   if (url === '') errors.push("URL is required")
  //   if (phone === '' || phone.length !== 10) errors.push("Phone is not valid")
  //   if (city === '') errors.push("City is required")
  //   if (state === '') errors.push("State is required")
  //   if (zipCode === '' || zipCode.length !== 5) errors.push("zipCode is not valid")
  //   if (openTime === '') errors.push("openTime is required")
  //   if (closeTime === '') errors.push("closeTime is required")
  //   if (description === '') errors.push("Description is required")
  //   if (previewUrl === '') errors.push("previewUrl is required")
  //   if (!previewUrl.endsWith('.jpg') && !previewUrl.endsWith('.png') && !previewUrl.endsWith('.jpeg')) {
  //     errors.push('Provide a valid image url')
  //  }
  //   setErrors(errors)
  // }, [name, address, url, phone, city, state, zipCode, openTime, closeTime, description, previewUrl])


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
      zipcode: zipCode,
      open_time: openTime,
      close_time: closeTime,
      description,
      preview_image: previewUrl,
    };
    setErrors([]);
    await dispatch(editBusiness(businessData, business.id)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors([data.errors]);
      }
    );
    await dispatch(getBusinessByid(businessId));
  };
  return (
    isLoaded && (
      <form onSubmit={handleSubmit} className="editForm">
        <div className="editTitle"></div>
        <div>
          {errors.map((error, idx) => (
            <div key={idx} className="editError">
              {error}
            </div>
          ))}
        </div>
        <div className='updateTitle'>Update Business</div>
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
            type="integer"
            placeholder="Phone"
            value={phone}
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
