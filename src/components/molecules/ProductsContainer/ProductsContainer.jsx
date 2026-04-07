import { ProductBoxes } from "../ProductBoxes/ProductBoxes";
import { Skeleton } from "../Skeleton/Skeleton";
import style from "./ProductsContainer.module.css";

export function ProductsContainer({ products }) {
  return (
    <>
      {products.length ? (
        <div className={style.productContainer}>
          {products.map((product) => {
            return <ProductBoxes product={product} />;
          })}
        </div>
      ) : (
        <Skeleton />
      )}
    </>
  );
}
