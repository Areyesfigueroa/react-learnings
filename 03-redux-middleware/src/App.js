import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./action";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default App;
