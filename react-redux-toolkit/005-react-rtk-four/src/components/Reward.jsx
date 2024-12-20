import { useSelector, useDispatch } from "react-redux";
import { increment, incrementByAmount } from "../store/reducers/reward.reducer";

const Reward = () => {
  const points = useSelector((state) => state.reward.points);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Reward Component</b>
        </h4>
        <h3>Total Reward : {points}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>{" "}
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment By 5 +
        </button>
      </div>
    </div>
  );
};

export default Reward;
