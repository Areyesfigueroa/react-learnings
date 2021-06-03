import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const itemsCount = useSelector(
    (state) => Object.values(state.cart.items).length
  );

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleShow());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsCount}</span>
    </button>
  );
};

export default CartButton;
