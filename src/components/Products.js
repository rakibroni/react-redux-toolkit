import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
const Product = (product) => {
  const [products, getProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => getProduct(result));
  }, []);
  const productItem = products.map((product, index) => (
    <ProductItem key={index} product={product} />
  ));
  return (
    <div className="mx-auto max-w-2xl px-4  sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">      
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {productItem}
      </div>
    </div>
  );
};

export default Product;
