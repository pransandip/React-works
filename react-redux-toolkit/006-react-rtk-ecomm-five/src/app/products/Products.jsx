import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/slices/products/productsSlice";
import { addCartItem } from "../../store/slices/cart/cartSlice";
import "./Products.css";

const Products = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      {products?.map((product) => (
        <div className="card" key={product.title}>
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ width: "100%" }}
          />
          <h1>{product.title}</h1>
          <p className="price">${product.price}</p>
          <p>{product.description}</p>
          <p>
            <button onClick={() => dispatch(addCartItem(product))}>
              Add to Cart
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Products;
