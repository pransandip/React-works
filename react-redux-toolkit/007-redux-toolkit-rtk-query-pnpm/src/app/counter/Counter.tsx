import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../store/slices/counter/counterSlice";

type Props = {};

const Counter = (props: Props) => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.counter.value);

  return (
    <div>
      <button type="button" onClick={() => dispatch(incrementByAmount(3))}>
        3 +
      </button>{" "}
      <button type="button" onClick={() => dispatch(increment())}>
        +
      </button>{" "}
      {value}{" "}
      <button type="button" onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
};

export default Counter;
