import Product from "./Product";
import { PRODUCTS } from "../helpers/constants";

const Products = () => {
  return (
    <div className="row">
      {PRODUCTS.map((element) => {
        return (
          <div className="col-5 border m-2" key={element.id}>
            <Product product={element} addButton />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
