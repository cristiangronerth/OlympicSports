import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Card from "../../common/Card";
import { SimpleGrid } from "@chakra-ui/react";
import { getAllShorts } from "../../state/products";
import { getCartItems } from "../../state/cartItem";

export default function ShirtsCategory() {
  const [shorts, setShorts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllShorts(setShorts));
  }, []);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <>
      <SimpleGrid minChildWidth="500px" spacing="30px">
        {shorts.map((item, i) => (
          <Link key={i} to={`/product/${item.id}`}>
            <Card item={item} />
          </Link>
        ))}
      </SimpleGrid>
    </>
  );
}
