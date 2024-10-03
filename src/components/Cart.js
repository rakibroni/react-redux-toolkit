 
import { useSelector } from "react-redux";
import CartItem from "./CartItem"
const Cart = (product) => {
  const products = useSelector(state => state.cart);


    const cartList = products.items.map(product=> (
      <CartItem key={product.id} product={product} />
    ));
  return (
    <div className="mx-auto max-w-2xl px-4  sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 xl:gap-x-8">
        <ul className="-my-6 divide-y divide-gray-200">
            {cartList}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
