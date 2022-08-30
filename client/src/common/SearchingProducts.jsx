import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";

import { getSearchProduct } from "../state/products";
import SearchCard from "./CardSearch";
import axios from "axios";

const SearchingProducts = () => {
  //SEARCH
  const [searchValue, setSearchValue] = useState("");
  const [items, setItems] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const handleSearchProduct = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getSearchProduct({ setItems, searchValue }));
  };

  useEffect(() => {
    axios
      .get("/api/products/getAllProducts")
      .then((products) => setAllProducts(products.data))
      .catch((error) => console.log(error));
  }, []);

  
  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className=" w-full h-11 rounded-[8rem] outline-none px-5 py-3 placeholder:text-slate-500 text-[1.1rem] text-black/50 mt-20 "
          placeholder="Search for a product"
          value={searchValue}
          onChange={handleSearchProduct}
        />
      </form>

      {items.length === 0 ? 
      (
        <SimpleGrid minChildWidth="500px" spacing="30px">
        {allProducts.map((item, i) => (
          <Link key={i} to={`/product/${item.id}`}>
            <SearchCard item={item} />
          </Link>
        ))}
      </SimpleGrid>
      ) : (
        <div>
          <SimpleGrid minChildWidth="500px" spacing="30px">
            {items.map((item, i) => (
              <Link key={i} to={`/product/${item.id}`}>
                <SearchCard item={item} />
              </Link>
            ))}
          </SimpleGrid>
        </div>
      )}
    </>
  );
};

export default SearchingProducts;
