import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { editBusiness } from "../../../store/business";
const imageURLRegex = /\.(jpeg|jpg|png)$/;

function BusinessEditForm() {
  const {business_id} = useParams()
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const business = useSelector(state => state.businesses[business_id])

  const [name, setName] = useState(business?.name);
  const [address, setAddress] = useState(business?.address);
  const [url, setUrl] = useState(business?.url);
  const [phone, setPhone] = useState(business?.phone);
  const [city, setCity] = useState(business?.city);
  const [state, setState] = useState(business?.state);
  const [zipCode, setZipCode] = useState(business?.zipCode);
  const [openTime, setOpenTime] = useState(business?.openTime);
  const [closeTime, setCloseTime] = useState(business?.closeTime);
  const [description, setDescription] = useState(business?.description);
  const [previewUrl, setPreviewUrl] = useState(business?.previewUrl);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

  const handleSubmit = (e) => {
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
    dispatch(editBusiness(businessData, business.id)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors([data.errors])
    })
  }
  return (
    <form onSubmit={handleSubmit} className='editForm'>
      <div className='editTitle'>
      </div>
      <div>
        <h2 className='editSubTitle'>Update Business</h2>
      </div>
      <div>
        {errors.map((error, idx) =>
        <div key={idx} className='editError'>{error}</div>
        )}
      </div>
      <label>
        <input
        className='editName'
        type="text"
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        />
      </label>
      <label>
        <input
        className='editAddress'
        type="text"
        placeholder='Address'
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
        />
      </label>
      <label>
        <input
        className='editUrl'
        type="text"
        placeholder='Url'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        />
      </label>
      <label>
        <input
        className='editPhone'
        type="integer"
        placeholder='Phone'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        />
      </label>
      <label>
        <input
        className='editCity'
        type="text"
        placeholder='City'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
        />
      </label>
      <label>
        <input
        className='editState'
        type="text"
        placeholder='State'
        value={state}
        onChange={(e) => setState(e.target.value)}
        required
        />
      </label>
      <label>
        <input
        className='editZipCode'
        type="integer"
        placeholder='ZipCode'
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        required
        />
      </label>
      <label>
        <input
        className='editOpenTime'
        type="number"
        placeholder='OpenTime'
        value={openTime}
        onChange={(e) => setOpenTime(e.target.value)}
        required
        />
      </label>
      <label>
        <input
        className='editCloseTime'
        type="number"
        placeholder='CloseTime'
        value={closeTime}
        onChange={(e) => setCloseTime(e.target.value)}
        required
        />
      </label>
      <label>
        <textarea
        className='editDescription'
        type="text"
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        />
      </label>
      <label>
        <input
        className='editPreviewUrl'
        type="text"
        placeholder='PreviewUrl'
        value={previewUrl}
        onChange={(e) => setPreviewUrl(e.target.value)}
        required
        />
      </label>
      <button type="submit" className='editBusinessBut'>Update Your Business!</button>
    </form>
  )
}

export default BusinessEditForm;
