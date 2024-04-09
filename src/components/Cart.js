import Product from "./Product";
import _ from "lodash";

const Cart = ({ cart }) => {
  if (cart.length === 0) {
    return <div className="border h-100">"Your Cart is empty!"</div>;
  }
  return (
    <div className="border h-100">
      Total Items: {cart.length}
      <br />
      Cart Total: $
      {_.sumBy(cart, (product) => {
        return parseFloat(product.price);
      })}
      {cart.map((element) => {
        return (
          <div className="col-5 border m-2" key={element.id}>
            <Product product={element} removeButton />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
