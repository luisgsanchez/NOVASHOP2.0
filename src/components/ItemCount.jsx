import { useState } from "react";

const ItemCount = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="d-flex gap-2 align-items-center">
      <button className="btn btn-outline-light" onClick={() => setCount(Math.max(1, count - 1))}>-</button>
      <span className="text-white fw-bold">{count}</span>
      <button className="btn btn-outline-light" onClick={() => setCount(count + 1)}>+</button>

      <button className="btn btn-warning ms-2" onClick={() => alert(`Agregado: ${count}`)}>
        Agregar
      </button>
    </div>
  );
};

export default ItemCount;
