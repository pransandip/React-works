import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  getUserAccount,
} from "../store/slices/account.slice";

const Account = () => {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  // Defined state
  const [value, setValue] = useState(0);

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount: ${amount}</h3>
        <h3>points: {points}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>{" "}
        <button onClick={() => dispatch(decrement())}>Decrement -</button>{" "}
        <input
          type="number"
          onChange={(e) => setValue(+e.target.value)}
        ></input>{" "}
        <button onClick={() => dispatch(incrementByAmount(value))}>
          Increment By {value} +
        </button>{" "}
        <button onClick={() => dispatch(getUserAccount("d3794527d4"))}>
          Init Account
        </button>
      </div>
    </div>
  );
};

export default Account;
