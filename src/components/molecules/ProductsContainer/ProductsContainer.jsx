import { ProductBoxes } from "../ProductBoxes/ProductBoxes";
import style from "./ProductsContainer.module.css";

export function ProductsContainer({ products }) {
  return (
    <div className={style.productContainer}>
      {products.map((product) => {
        return <ProductBoxes product={product} />;
      })}
    </div>
  );
}
