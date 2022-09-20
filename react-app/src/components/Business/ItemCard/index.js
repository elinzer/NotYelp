import { useDispatch, useSelector } from "react-redux";
import { getBusinessByid } from "../../../store/business";
import { deleteItemById } from "../../../store/item";
import { useParams } from "react-router-dom";

import "./ItemCard.css";


function ItemCard({ item }) {
  let currentUser;
  const dispatch = useDispatch();
  const { businessId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const business = useSelector((state) => state.businesses[businessId]);

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteItemById(item.id));
    await dispatch(getBusinessByid(item.business_id))
  };

  if (sessionUser && item) {
    if (sessionUser.id === business.owner_id) {
      currentUser = true;
    } else currentUser = false;
  }

  return (
    <div className="item-card">
      <div className="item-card-image">
        <img className="item-image" src={item?.preview_image} />
      </div>
      <div className="item-card-info">
        <div className="item-card-name">{item?.name}</div>
        <div className="item-card-price">${item?.price}</div>
        {currentUser && (
        <div>
        <button
         onClick={handleDelete}
         className="menuitem delete">
         Delete Item
        </button>
        </div>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
