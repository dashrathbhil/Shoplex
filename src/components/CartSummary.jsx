import { useCart } from "../context/CartContext";

const CartSummary = () => {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div>
      <h3>Cart Summary</h3>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ₹{totalPrice}</p>
    </div>
  );
};

export default CartSummary;
