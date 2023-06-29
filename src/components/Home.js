import React from "react";
import { useState, useEffect } from "react";
import Dessert from "./Dessert";

export default function Home() {
  const [dessertList, setDessertList] = useState([]);
  const data = require("../sampleData/DessertMenu.json");

  useEffect(() => {
    setDessertList(data.items);
  }, [data]);

  return (
    <div className="product-list">
      {dessertList.map((item) => (
        <Dessert item={item} key={item.id} />
      ))}
    </div>
  );
}
