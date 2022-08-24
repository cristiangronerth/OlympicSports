import React from "react";
import styled from "styled-components";
import Btn from "../../../common/Btn";
import Category from "./Category";

function Categories() {
  return (
    <CategoryList>
      <Category />
      <ArrowButton>
        <Btn title="GO TO SHOP"/>
      </ArrowButton>
    </CategoryList>
  );
}

const CategoryList = styled.section`
  ul {
    list-style: none;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
    overflow: scroll;
    padding-left: 2.5em;

    /* Hide Scrollbars */
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  li {
    min-width: 200px;
  }
`;

const ArrowButton = styled.div`
  padding-left: 1.5em;
  padding-right: 1.5em;
`;

export default Categories;
