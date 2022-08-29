import styled from "styled-components";
import { CartBtn } from "../../common/CartBtn";

function CartSummary() {

  return (
    <CheckoutSummary>
      <div>
        <h4>Subtotal</h4>
        <h4>$ 459 USD</h4>
      </div>
      <CartBtn>Buy Now</CartBtn>
    </CheckoutSummary>
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
