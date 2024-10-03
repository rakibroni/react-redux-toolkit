import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductItem = (product) => {
  const dispatch = useDispatch();

  // Function to dispatch addToCart action with the product as the payload
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="group border bottom-1 p-10">
      <div className="w-48 h-48 overflow-hidden rounded-lg bg-gray-200">
        <img
          src={product.product.image}
          alt={product.product.title}
          className="w-full h-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.product.title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
        ${product.product.price}
      </p>
      <button
        className="rounded-md bg-blue-600 py-1 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        type="button"
        onClick={() => handleAddToCart(product.product)} // Pass product.product
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
