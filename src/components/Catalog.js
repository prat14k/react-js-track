import Products from "./Products";
import Cart from "./Cart";
import { trigger } from "../helpers/events";

const Catalog = ({ cart }) => {
  return (
    <div className="row">
      <div className="col-8">
        <Products />
      </div>
      <div className="col">
        <Cart cart={cart} />
        <button
          onClick={() => {
            trigger("placeOrder");
          }}
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default Catalog;
