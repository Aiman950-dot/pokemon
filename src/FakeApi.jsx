import { useEffect, useState } from "react";
import "./App.css";
import Fetch from "./apiData";

function Fake() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const api = "https://fakestoreapi.com/products"; // get a single product
    fetch(api)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(product);
  if (product) {
    return (
      <>
        <Fetch product={product} />
      </>
    );
  }
}

export default Fake;
