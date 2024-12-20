import { ACTIONS } from "../actions";

export const bonusReducer = (state = { points: 0 }, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT_BONUS:
      return { points: state.points + 1 };

    case ACTIONS.INCREMENT_BY_AMOUNT:
      //* extra cases linked to account reducer
      if (action.payload >= 100) {
        return { points: state.points + 1 };
      } else {
        return state;
      }
    default:
      return state;
  }
};
