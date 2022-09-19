import "./ItemCard.css";

function ItemCard({ item }) {
  return (
    <div className="item-card">
      <div className="item-card-image">
        <img className="item-image" src={item.preview_image} />
      </div>
      <div className="item-card-info">
        <div className="item-card-name">{item.name}</div>
        <div className="item-card-price">${item.price}</div>
      </div>
    </div>
  );
}

export default ItemCard;
