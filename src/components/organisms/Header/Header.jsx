import { ProductsContainer } from "../../molecules/ProductsContainer/ProductsContainer";
import style from "./Header.module.css"

export function Header({ products }) {
  return (
    <div className={style.headerContainer}>
      <ProductsContainer products={products} />
    </div>
  );
}
