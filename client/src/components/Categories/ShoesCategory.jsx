import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";


import Card from "../../common/Card";
import { SimpleGrid } from "@chakra-ui/react";
import { getAllShoes } from "../../state/products";
import { getCartItems } from "../../state/cartItem";


export default function ShoesCategory() {
  
  const [shoes,setShoes] = useState([]);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllShoes(setShoes))
  },[])

  useEffect(() => {
    dispatch(getCartItems())
  },[])

  return (
    <>
      <SimpleGrid minChildWidth="500px" spacing="30px">
        {shoes.map((item, i) => (
          <Link key={i} to={`/product/${item.id}`}><Card item={item} /></Link>
        ))}
      </SimpleGrid>
    </>
  );
}