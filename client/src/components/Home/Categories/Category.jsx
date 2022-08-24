import React from "react";
import styled from "styled-components";

import accesories from "../../../assets/images/categories/accesories.png"
import shoes from "../../../assets/images/categories/shoes.png"
import shirt from "../../../assets/images/categories/shirt.png"
import pants from "../../../assets/images/categories/pants.png"
import shorts from "../../../assets/images/categories/shorts.png"

import icon from "../../../assets/icons/ball-basketball-icon.svg"


function Category() {

    const categorylist = [
        {img: accesories, icon: icon, name: "Accesories"},
        {img: shoes, icon: icon, name: "Shoes"},
        {img: shirt, icon: icon, name: "Shirts"},
        {img: pants, icon: icon, name: "Pants"},
        {img: shorts, icon: icon, name: "Shorts"},
    ];

  return (
    <ul>
        {categorylist.map((item,i) => {
          return (
            <Item key={i}>
              <Img src={item.img} alt=""/>
              {/* <Icon src={item.icon} alt=""></Icon> */}
              <Name>{item.name}</Name>
            </Item>
          )
        })}
    </ul>
  )
}

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #141414;
  background-color: #e7d6c4;
  padding: 1em 0;

  text-transform: uppercase;

  &:hover {
    cursor: grab;
  }

  //Set max with for product type label (e.g. unisex)
  img + img {
    max-width: 80px;
  }
`;

const Img = styled.img`
  max-height: 150px;
  object-fit: contain;
`;

// const Icon = styled.img`
//   font-size: 1rem;
// `;

const Name = styled.h4`
  text-transform: uppercase;
  font-family: "TTrailer";
  font-weight: 300;
  font-size: 4.6rem;
  letter-spacing: -1.8px;
  line-height: 1em;
`;

export default Category;
