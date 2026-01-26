import { Link } from "react-router-dom";

const ItemCard = ({ id, title, description, price }) => {
  return (
    <div className="card bg-dark text-white">
      <div className="card-body">
        <h5>{title}</h5>
        <p className="text-secondary">{description}</p>
        <p className="fw-bold">${price}</p>

        <Link className="btn btn-warning" to={`/item/${id}`}>
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;
