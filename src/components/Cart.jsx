import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeItem, clearCart, getTotalPrice } =
    useContext(CartContext);

  if (cart.length === 0) {
    return <h2>🛒 Carrito vacío</h2>;
  }

  return (
    <div>
      <h2>🛒 Carrito</h2>

      {cart.map(prod => (
        <div key={prod.id} style={{ borderBottom: "1px solid gray", marginBottom: 10 }}>
          <h4>{prod.name}</h4>
          <p>Cantidad: {prod.quantity}</p>
          <p>Subtotal: ${prod.price * prod.quantity}</p>
          <button onClick={() => removeItem(prod.id)}>
            Eliminar
          </button>
        </div>
      ))}

      <h3>Total: ${getTotalPrice()}</h3>

      <button onClick={clearCart}>
        Vaciar carrito
      </button>
    </div>
  );
};

export default Cart;
