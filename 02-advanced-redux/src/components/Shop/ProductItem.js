import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const addToCartHandler = () => {
    if (items[title]) {
      console.log("Increment Qty");
      dispatch(cartActions.incrementQty(title));
    } else {
      console.log("Add to cart");
      dispatch(cartActions.add({ title, quantity: 1, total: price, price }));
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
