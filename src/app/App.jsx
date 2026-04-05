import { useData } from "../hooks/useData";
import { useSearchInput } from "../hooks/useSearchInput";
import { Header } from "../components/organisms/Header/Header";
import { Nav } from "../components/organisms/Nav/Nav";
import searchIcon from "../shared/assets/icons/search_icon.png";
import "./style.css";

function App() {
  const { newSearchText, text, handleClick, searchInput,searchProducts } = useSearchInput();
  const { products } = useData();

  return (
    <main className="mainContainer">
      <Nav
        newSearchText={newSearchText}
        text={text}
        handleClick={handleClick}
        searchInput={searchInput}
        searchIcon={searchIcon}
        products={products}
        searchProducts={searchProducts}
      />
      <Header products={products} />
    </main>
  );
}

export default App;
