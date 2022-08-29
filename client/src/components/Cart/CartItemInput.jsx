import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { deleteItem } from "../../state/cartItem";

function CartItemInput({quantity, cartItemId}) {

  const dispatch = useDispatch()

  const DeleteItem = (e) => {
    e.preventDefault();
    dispatch(deleteItem(cartItemId))
  }

  return (
    <>
      <NumberInput defaultValue={quantity} maxW="70px">
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <br/>
      <br/>
      <br/>
      <TrashIcon><FontAwesomeIcon className="hover:cursor-pointer" onClick={DeleteItem} icon={faTrash} /></TrashIcon>
    </>
  );
}

const TrashIcon = styled.div`
  margin-left: 20px;
`

export default CartItemInput;
