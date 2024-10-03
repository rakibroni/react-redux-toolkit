import { useDispatch } from "react-redux";
import { removeToCart } from "../store/cartSlice";
const Cart = (product) => {
  const dispatch = useDispatch();

  const removeItemCart = (product) => {
    dispatch(removeToCart(product));
  };


  return (
    <li key={product.product.id} className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          alt={product.product.image}
          src={product.product.image}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href={product.href}>{product.product.title}</a>
            </h3>
            <p className="ml-4">${product.product.price * product.product.quantity}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {product.product.quantity}</p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={()=>removeItemCart(product.product)}
            >
              Remove 
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Cart;
