import { Outlet } from "react-router-dom";
import { Nav } from "../../organisms/Nav/Nav";

export function Layout({
  newSearchText,
  text,
  handleClick,
  searchInput,
  searchIcon,
  products,
  searchProducts,
  handleBlur,
}) {
  return (
    <>
      <Nav
        newSearchText={newSearchText}
        text={text}
        handleClick={handleClick}
        searchInput={searchInput}
        searchIcon={searchIcon}
        products={products}
        searchProducts={searchProducts}
        handleBlur={handleBlur}
      />
      <Outlet />
    </>
  );
}
