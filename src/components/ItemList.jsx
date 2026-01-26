import ItemCard from "./ItemCard";

const ItemList = ({ items }) => {
  return (
    <div className="row g-4">
      {items.map((prod) => (
        <div className="col-12 col-md-6 col-lg-4" key={prod.id}>
          <ItemCard {...prod} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
