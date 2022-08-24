import React from "react";
import styled from "styled-components";

import circle from "../../../assets/icons/circle-container.svg"
import arrow from "../../../assets/icons/arrow.svg"

function ArrowBtn() {
  return (
    <ActionButton>
        <p>GO TO SHOP</p>
        <StytledIcon>
            <img src={circle} alt="" />
            <img src={arrow} alt="" />
        </StytledIcon>
    </ActionButton>
  )
}

const ActionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2em;

  p {
    text-transform: uppercase;
    font-size: clamp(1rem, 2vw, 2rem);
    font-weight: 500;
  }

  p:hover {
    cursor: pointer;
  }
`;

const StytledIcon = styled.a`
  position: relative;
  margin-left: 0.7em;

  &:hover {
    cursor: pointer;
  }

  img {
    width: clamp(2.5rem, 5vw, 5rem);
  }

  img:first-child {
    position: absolute;
    right: 0;
  }

  img:last-child {
    padding: 0.6em;
  }
`;

export default ArrowBtn;
