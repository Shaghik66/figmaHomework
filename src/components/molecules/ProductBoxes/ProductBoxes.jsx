import style from "./ProductBoxes.module.css"

export function ProductBoxes({ product }) {
  return (
    <div className={style.productBoxesContainer}>
      <img className={style.boxesImage} src={product.img} alt="" />
      <p className={style.productBoxTag}>{product.tags}</p>
      <h2 className={style.productTitle}>{product.title}</h2>
      <p className={style.productAuthorP}>
        {product.autor} <span className={style.productSpan}> &bull; {product.date} &bull; {product.views} Views</span>
      </p>
      <p className={style.productDescription}>{product.text}</p>
    </div>
  );
}
