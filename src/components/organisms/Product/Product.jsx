import { useParams } from "react-router-dom";

export function Product({ products }) {
  const { linkText } = useParams();

  const findLink = products.find((product) => {
    return product?.tags.toLowerCase() === linkText;
  });

  console.log([findLink]);
  console.log(products);
  console.log(linkText);

  return (
    <>
      <div>
        <h1>{findLink?.title}</h1>
        {console.log(findLink)}
        <p>{findLink?.tags}</p>
      </div>
    </>
  );
}
