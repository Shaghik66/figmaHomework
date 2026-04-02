import { useState } from "react";
import logo from "../../../shared/assets/icons/Logotype.png";
import searchIcon from "../../../shared/assets/icons/search_icon.png";
import style from "./Nav.module.css";

export function Nav() {
  const [searchInput, setSearchInput] = useState(false);

  const handleClick = () => {
    setSearchInput(!searchInput)
  }

  return (
    <>
      <div className={style.navbarContainer}>
        <div className={style.mainLogoContainer}>
          <img className={style.mainLogo} src={logo} alt="" />
        </div>
        <div  className={style.searchButtonContainer}>
            {searchInput ?  <input placeholder="Search" className={style.searchInput} type="text" /> :  ""}
          <img onClick={handleClick} className={style.searchButton} src={searchIcon} alt="" />
        </div>
       
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
