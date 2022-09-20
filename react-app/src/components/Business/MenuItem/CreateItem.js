import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { createItem } from "../../../store/item";
const imageURLRegex = /\.(jpeg|jpg|png)$/;

function CreateItemForm({ businessId }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const itemData = {
      owner_id: user.id,
      business_id: businessId,
      name,
      price,
      preview_image: previewUrl,
    };
    const newItem = await dispatch(createItem(itemData));
    if (newItem.errors) {
      setErrors(newItem.errors);
    }
  };

  return (
    <div className="menuItemBox">
    <form onSubmit={handleSubmit}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error.split(": ")[1]}</div>
        ))}
      </div>
      <div className="AddMenuTitle">Add Menu Item</div>
      <div>
        <label htmlFor="name"/>
        <input
          type="text"
          value={name}
          className='nameInputm'
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="price"/>
        <input
          type="number"
          value={price}
          className='priceInputm'
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="previewUrl"/>
        <input
          type="url"
          value={previewUrl}
          className='previewUrlInputm'
          placeholder="Preview Image URL (jpg/jpeg/png)"
          onChange={(e) => setPreviewUrl(e.target.value)}
          required
        />
      </div>
      <button
      name="submit"
      type="submit"
      className='submitButtonm'>
        Create Item
      </button>
    </form>
    </div>
  );
}

export default CreateItemForm;
