import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  incrementByAmount,
} from "../../store/reducers/reward.reducer";

export default function Reward() {
  const reward = useSelector((state) => state.reward.points);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Reward Component</b>
        </h4>
        <h3>Total Reward : ${reward}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>{" "}
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment By 5 +
        </button>
      </div>
    </div>
  );
}
