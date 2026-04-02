import { dataURL } from "../constants/dataURL";
import { useEffect } from "react";
import { useState } from "react";

export function useData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    dataURL.get("/data.json").then((res) => setProducts(res.data));
  }, []);

  return {products}
}
