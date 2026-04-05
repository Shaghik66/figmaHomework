import style from "./SearchInput.module.css";

export function SearchInput({
  newSearchText,
  text,
  handleClick,
  searchInput,
  searchIcon,
  products,
  searchProducts,
}) {
  return (
    <div className={style.searchButtonContainer}>
      {searchInput ? (
        <input
          value={text}
          onChange={newSearchText}
          placeholder="Search"
          className={style.searchInput}
          type="text"
        />
      ) : (
        ""
      )}
      <img
        onClick={() => {
          handleClick(products);
        }}
        className={style.searchButton}
        src={searchIcon}
        alt=""
      />

      <div className={searchInput ? style.searchBox : ""}>
        {searchProducts.map((searchProduct) => {
          return <div className={style.searchTextContainer}><p className={style.searchBoxText}>{searchInput ? searchProduct.title : ""}</p></div>
          ;
        })}
      </div>
    </div>
  );
}
