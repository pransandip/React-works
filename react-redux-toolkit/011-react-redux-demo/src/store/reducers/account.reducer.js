import { ACTIONS } from "../actions";

export const accountReducer = (state = { amount: 10 }, action) => {
  switch (action.type) {
    case ACTIONS.GET_ACC_USER_FULFILLED:
      return { amount: action.payload, pending: false };

    case ACTIONS.GET_ACC_USER_REJECTED:
      return { ...state, error: action.error, pending: false };

    case ACTIONS.GET_ACC_USER_PENDING:
      return { ...state, pending: true };

    case ACTIONS.INCREMENT:
      return { amount: state.amount + 1 };

    case ACTIONS.DECREMENT:
      if (state.amount !== 0) {
        return { amount: state.amount - 1 };
      } else {
        return state;
      }

    case ACTIONS.INCREMENT_BY_AMOUNT:
      return { amount: state.amount + action.payload };

    default:
      return state;
  }
};
