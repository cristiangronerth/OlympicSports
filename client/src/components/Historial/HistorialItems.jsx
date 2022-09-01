import React from "react";
import ItemInfo from "./ItemInfo";

function HistorialItems({ products, item }) {
  return (
    <div className="container px-5 py-24 mx-auto my-2 flex flex-wrap">
        <h1>Purchase N º {item+1}</h1>
      {products.products.map((item, i) => (
        <ItemInfo key={i} productId={item} />
      ))}
    </div>
  );
}

export default HistorialItems;
