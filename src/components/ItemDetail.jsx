import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div className="card bg-dark text-white">
      <div className="card-body">
        <h2>{item.title}</h2>
        <p className="text-secondary">{item.description}</p>
        <p className="fw-bold">${item.price}</p>
        <ItemCount />
      </div>
    </div>
  );
};

export default ItemDetail;
