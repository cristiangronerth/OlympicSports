import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from "../../../common/Navbar";
import Footer from "../../Footer/Footer";

const ProductsPanel = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("/api/products/getAllProducts")
        .then((products)=>setProducts(products.data))
    },[])
    console.log(products);

  return (
    <>
    <Navbar />
    
    <Footer />
    </>
  )
}

export default ProductsPanel