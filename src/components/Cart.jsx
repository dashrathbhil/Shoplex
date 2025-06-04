import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQty } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>Price: ₹{item.price}</p>
          <input
            type="number"
            min="1"
            value={item.qty}
            onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
          />
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
