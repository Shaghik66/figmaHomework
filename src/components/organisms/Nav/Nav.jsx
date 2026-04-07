import { Route, Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../../shared/assets/icons/Logotype.png";
import { SearchInput } from "../../molecules/SearchInput/SearchInput";
import style from "./Nav.module.css";

export function Nav({
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
      <div className={style.navbarContainer}>
        <div className={style.mainLogoContainer}>
          <NavLink to="/">
            <img className={style.mainLogo} src={logo} alt="" />
          </NavLink>
        </div>

        <SearchInput
          newSearchText={newSearchText}
          text={text}
          handleClick={handleClick}
          searchInput={searchInput}
          searchIcon={searchIcon}
          products={products}
          searchProducts={searchProducts}
          handleBlur={handleBlur}
        />
      </div>
      <hr />
      <div className={style.navBarSelectContainer}>
        <select className={style.selectPart} name="" id="">
          <option value="" disabled selected>
            Demos
          </option>
        </select>
        <select className={style.selectPart} name="" id="">
          <option value="" disabled selected>
            Post
          </option>
        </select>
        <select className={style.selectPart} name="" id="">
          <option value="" disabled selected>
            Features
          </option>
        </select>
        <select className={style.selectPart} name="" id="">
          <option value="" disabled selected>
            Categories
          </option>
        </select>{" "}
        <select className={style.selectPart} name="" id="">
          <option value="" disabled selected>
            Shop
          </option>
        </select>
        <button className={style.selectPart}>Buy Now</button>
      </div>
      <hr />
    </>
  );
}
