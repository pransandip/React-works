import { useSelector, useDispatch } from "react-redux";
import { ACTION_CREATORS } from "../../store/actions";

export default function Bonus() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Amount : ${amount}</h3>
        <h3>Total point : {points}</h3>

        <button onClick={() => dispatch(ACTION_CREATORS.incrementBonus())}>
          Increment +
        </button>
      </div>
    </div>
  );
}
