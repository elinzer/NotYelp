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
    await dispatch(getBusinessByid(item.business_id));
  };

  if (sessionUser && item) {
    if (sessionUser.id === business.owner_id) {
      currentUser = true;

    } else currentUser = false;
  }

  return (
    <div className="item-card">
      <div className="item-card-image">
        <img className="item-image" src={item?.preview_image || 'https://st2.depositphotos.com/1000419/5237/v/450/depositphotos_52373739-stock-illustration-pieces-of-pizza-sketch-for.jpg' } />
      </div>
      <div className="item-card-info">
        <div className="item-card-name">{item?.name}</div>
        <div className="item-card-price">${item?.price}</div>
        {currentUser && (
          <div>
            <button onClick={handleDelete} className="menuitem-delete">
              <div className="delete-icon">
                <i class="fa-solid fa-trash"></i>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
