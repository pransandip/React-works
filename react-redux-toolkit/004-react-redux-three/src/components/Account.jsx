import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ACTION_CREATORS } from "../store/actions";

const Account = () => {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  // Defined state
  const [value, setValue] = useState(0);

  // get users initial amount
  useEffect(() => {
    dispatch(ACTION_CREATORS.getUserAccount(1));
  }, [dispatch]);

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount: ${amount}</h3>
        <h3>points: {points}</h3>
        <button onClick={() => dispatch(ACTION_CREATORS.increment())}>
          Increment +
        </button>{" "}
        <button onClick={() => dispatch(ACTION_CREATORS.decrement())}>
          Decrement -
        </button>{" "}
        <input
          type="number"
          onChange={(e) => setValue(+e.target.value)}
        ></input>{" "}
        <button
          onClick={() => dispatch(ACTION_CREATORS.incrementByAmount(value))}
        >
          Increment By {value} +
        </button>{" "}
        <button onClick={() => dispatch(ACTION_CREATORS.getUserAccount(1))}>
          Init Account
        </button>
      </div>
    </div>
  );
};

export default Account;
