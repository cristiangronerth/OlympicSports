import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../../../common/Navbar";
import { getAllProducts } from "../../../state/products";
import Footer from "../../Footer/Footer";
import ProductsItem from "./ProductsItem";

const ProductsPanel = () => {


  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(setProducts))
  }, []);

  return (
    <>
      <Navbar />
      <div className="overflow-x-auto mt-32">
        <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">ID</th>
                    <th className="py-3 px-6 text-left">NOMBRE</th>
                    <th className="py-3 px-6 text-center">CATEGORIA</th>
                    <th className="py-3 px-6 text-center">PRECIO</th>
                    <th className="py-3 px-6 text-center">MODICFICAR</th>
                  </tr>
                </thead>
                {products.map((producto, i) => (
                  <ProductsItem key={i} producto={producto} setProducts={setProducts}></ProductsItem>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPanel;
