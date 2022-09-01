import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../../common/Navbar";
import Footer from "../../Footer/Footer";
import ProductsItem from "./ProductsItem";

const ProductsPanel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products/getAllProducts")
      .then((productos) => setProducts(productos.data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="overflow-x-auto mt-32">
        <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
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
                  <ProductsItem key={i} producto={producto}></ProductsItem>
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
