import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "./ItemList";
import { clearCart } from "../utils/slices/cartSlice";
// import

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const clearCartHandler = () => {
    // Dispatching an action
    dispatch(clearCart());
  };

  return (
    <div className="p-3 flex flex-col  items-center  border-x-black flex-1">
      <h1 className="font-bold">Cart page</h1>
      <button onClick={clearCartHandler}>Clear Cart</button>

      {cartItems.length === 0 ? (
        <h1 className="font-extrabold font-[40px]">No items in the cart</h1>
      ) : (
        <ItemList card={cartItems} />
      )}
    </div>
  );
};
