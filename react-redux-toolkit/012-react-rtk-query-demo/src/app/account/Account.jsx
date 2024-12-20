import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  getUserAccount,
} from "../../store/slices/account/accountSlice";

export default function Account() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  // Defined Ref
  const inputRef = useRef();

  // Defined state
  const [value, setValue] = useState(0);

  function handleBtnClickForIncByAmt() {
    dispatch(incrementByAmount(value));
    inputRef.current.value = "";
    setValue(0);
  }

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
          ref={inputRef}
          type="number"
          onChange={(e) => setValue(+e.target.value)}
        ></input>{" "}
        <button onClick={handleBtnClickForIncByAmt}>
          Increment By {value} +
        </button>{" "}
        <button onClick={() => dispatch(getUserAccount(2))}>
          Init Account
        </button>
      </div>
    </div>
  );
}
