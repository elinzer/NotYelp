import { useSelector, useDispatch } from "react-redux";
import {useHistory, useParams } from "react-router-dom";
import { getBusinessByid } from "../../../store/business";
import { deleteItemById } from "../../../store/item";

import "./ItemCard.css";


function ItemCard({ item }) {
  const { itemId } = useParams();
  // const items = useSelector(state => state.items[itemId])
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteItemById(item.id));
    await dispatch(getBusinessByid(item.business_id))
  };

  return (
    <div className="item-card">
      <div className="item-card-image">
        <img className="item-image" src={item?.preview_image} />
      </div>
      <div className="item-card-info">
        <div className="item-card-name">{item?.name}</div>
        <div className="item-card-price">${item?.price}</div>
        <div>
        <button
         onClick={handleDelete}
         className="menuitem delete">
         Delete Item
        </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
