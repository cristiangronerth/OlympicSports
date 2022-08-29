import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";


import Card from "../../common/Cards/ShirtCard";
import { SimpleGrid } from "@chakra-ui/react";
import { getAllShirts } from "../../state/products";
import { getCartItems } from "../../state/cartItem";

export default function ShirtsCategory() {
  
  const [shirts,setShirts] = useState([]);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllShirts(setShirts))
  },[])

  useEffect(() => {
    dispatch(getCartItems())
  },[])

  return (
    <>
      <SimpleGrid minChildWidth="500px" spacing="30px">
        {shirts.map((item, i) => (
          <Link key={i} to={`/product/${item.id}`}><Card item={item} /></Link>
        ))}
      </SimpleGrid>
    </>
  );
}