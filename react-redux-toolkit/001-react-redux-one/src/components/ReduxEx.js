import { useSelector, useDispatch } from "react-redux";
import { ACTIONS, decNumber } from "../store/actions";
import "./ReduxEx.css";

const ReduxEx = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 id="head_">Increment/Decrement Counter</h1>
      <h3 id="head_2">using React and Redux</h3>
      <h1 id="_state">{count}</h1>
      <br />
      <button
        type="button"
        onClick={() => dispatch({ type: ACTIONS.INCREMENT, payload: 5 })}
      >
        <span className="count_">+</span>
      </button>
      <span id="btnSpc"> </span>
      <button type="button" onClick={() => dispatch(decNumber(5))}>
        <span className="count_">-</span>
      </button>
    </div>
  );
};

export default ReduxEx;
