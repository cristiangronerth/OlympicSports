import React from "react";
import { remeras } from "./remera";

import Card from "../../common/Cards/ShirtCard";
import { SimpleGrid } from "@chakra-ui/react";
import styled from "styled-components";

export default function ShirtsCategorie() {
  return (
    <>
      <SimpleGrid minChildWidth="300px" spacing="30px">
        {remeras.map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </SimpleGrid>
    </>
  );
}


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const Input = styled.input`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  height: 68px;
  letter-spacing: 0px;
  outline: none;
  padding-left: 48px;
  width: 1629px;
  border-color: rgba(255, 255, 255, 0.4);
  background-color: #131728;
  text-align: center;

  &::placeholder {
    color: #fff;
  }
`;



