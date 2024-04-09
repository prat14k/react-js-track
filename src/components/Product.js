import gold from "../assets/products/gold.png";
import green from "../assets/products/green.png";
import grey from "../assets/products/grey.png";
import silver from "../assets/products/silver.png";
import { trigger } from "../helpers/events";

const Product = ({ product, addButton, removeButton }) => {
  const imageMapping = {
    "gold.png": gold,
    "green.png": green,
    "grey.png": grey,
    "silver.png": silver,
  };

  let actionButton = null;
  if (addButton) {
    actionButton = (
      <button
        onClick={() => {
          trigger("addToCart", { id: product.id });
        }}
      >
        Add To Cart
      </button>
    );
  } else if (removeButton) {
    actionButton = (
      <button
        onClick={() => {
          trigger("removeFromCart", { id: product.id });
        }}
      >
        Remove
      </button>
    );
  }

  return (
    <div className="row">
      <div className="col-4">
        <img src={imageMapping[product.image]} className="mw-100 mh-100" alt={imageMapping[product.image]} />
      </div>
      <div className="col">
        <h3>{product.name}</h3>
        <h4>
          ${product.price}({product.storage})
        </h4>
        {actionButton}
      </div>
    </div>
  );
};

export default Product;
