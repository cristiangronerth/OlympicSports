import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCartHistory } from "../../state/cartHistory";
import HistorialItems from "./HistorialItems";

function UserHistorial() {
  const [historyProducts, setHistoryProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const history = await dispatch(getCartHistory());
      const setHistory = await setHistoryProducts(history.payload);
    }
    fetchData();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      {historyProducts.map((item, i) => (
        <HistorialItems key={i} products={item} item={i} />
      ))}
    </section>
  );
}

export default UserHistorial;
