import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { createItem } from "../../../store/item";
const imageURLRegex = /\.(jpeg|jpg|png)$/;

function CreateItemForm() {
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
      // business_id: business.id,
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
        <label htmlFor="price">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="previewUrl">Preview Image</label>
        <input
          type="url"
          value={previewUrl}
          onChange={(e) => setPreviewUrl(e.target.value)}
          required
        />
      </div>
      <button name="submit" type="submit">
        Create Item
      </button>
    </form>
  );
}

export default CreateItemForm;
