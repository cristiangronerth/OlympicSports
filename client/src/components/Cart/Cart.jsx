import CartSummary from "./CartSummary";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCartItems } from "../../state/cartItem";


function Cart({setShowCart}) {

  const hideCartHandler = (e) => {
    e.preventDefault()
    setShowCart("cart")
  }

  const [cartItems,setCartItems] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartItems(setCartItems))
  },[])

  return (
    <>
      <CartHeader hideCartHandler={hideCartHandler}/>
      {cartItems.map((item,i) => (
        <CartItem key={i} productId={item.productId}/>
      ))}
      <CartSummary/>
    </>
  );
}

export default Cart;
