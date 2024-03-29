import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const items = useSelector((state) => Object.values(state.cart.items));
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((el, idx) => (
          <CartItem
            key={idx}
            item={{
              title: el.title,
              quantity: el.quantity,
              total: el.total,
              price: el.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
