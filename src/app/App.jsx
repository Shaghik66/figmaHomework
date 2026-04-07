import { Route, Routes } from "react-router-dom";
import { useData } from "../hooks/useData";
import { useSearchInput } from "../hooks/useSearchInput";
import { Header } from "../components/organisms/Header/Header";
import { Product } from "../components/organisms/Product/Product";
import { Layout } from "../components/templates/Layout/Layout";
import searchIcon from "../shared/assets/icons/search_icon.png";
import "./style.css";

function App() {
  const {
    newSearchText,
    text,
    handleClick,
    searchInput,
    searchProducts,
    handleBlur,
  } = useSearchInput();
  const { products } = useData();

  return (
    <main className="mainContainer">
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              newSearchText={newSearchText}
              text={text}
              handleClick={handleClick}
              searchInput={searchInput}
              searchIcon={searchIcon}
              products={products}
              searchProducts={searchProducts}
              handleBlur={handleBlur}
            />
          }
        >
          <Route index element={<Header products={products} />} />
          <Route path="/product" element={<p>hello</p>} />
          <Route
            path="/product/:linkText"
            element={<Product products={products} />}
          />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
