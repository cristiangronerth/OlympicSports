import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"


import { CartBtn } from "../../common/CartBtn";
import styled from "styled-components";

import { addToHistorial, deleteCartItems } from "../../state/checkout";
import axios from "axios";
import CheckoutForm from "../Checkout/CheckoutForm";

function CartSummary() {

  const [total ,setTotal] = useState({});
  const [cartItems , setCartItems] = useState([]);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCartUser(setTotal))
  // },[])

  // console.log(total)


  return (
    <>
    <CheckoutSummary>
      <div>
        <h4>Subtotal</h4>
        <h4>$ 2 USD</h4>
      </div>
      <Link to="/checkout"><CartBtn>PROCEED</CartBtn></Link>
    </CheckoutSummary>
    </>
  );
}

const CheckoutSummary = styled.div`
  padding: 2em;
  margin-top: 1em;
  background-color: #141414;
  color: #fcf9ee;
  text-transform: uppercase;

  div {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
  }

  button {
    color: #141414;
  }
`;

export default CartSummary;
