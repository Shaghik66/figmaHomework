import { useState } from "react";

export function useSearchInput() {
  const [text, setText] = useState("");
  const [searchInput, setSearchInput] = useState(false);
  const [searchProducts, setSearchProducts] = useState([]);

  const handleCheck = (product) => {
    let newCheck = true;

    if (!text.trim()) {
      newCheck = false;
      setSearchProducts([]);
    }
    if (newCheck) {
      const filtered = product.filter((p) => {
        return p.title.toLowerCase().includes(text.toLowerCase().trim());
      });
      setSearchProducts(filtered);
    }
  };

  const handleClick = (product) => {
    handleCheck(product);
    setSearchInput(true);
  };
  const newSearchText = (e) => setText(e.target.value);

  return { newSearchText, text, handleClick, searchInput, searchProducts };
}
