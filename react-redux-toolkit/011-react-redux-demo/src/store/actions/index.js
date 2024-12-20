import axios from "axios";

export const ACTIONS = Object.freeze({
  INIT: "account/init",
  INCREMENT: "account/increment",
  DECREMENT: "account/decrement",
  INCREMENT_BY_AMOUNT: "account/incrementByAmount",
  GET_ACC_USER_PENDING: "account/getUser/pending",
  GET_ACC_USER_FULFILLED: "account/getUser/fulfilled",
  GET_ACC_USER_REJECTED: "account/getUser/rejected",
  INCREMENT_BONUS: "bonus/increment",
});

// Action creators in Object
export const ACTION_CREATORS = {
  getUserAccount(id) {
    return async (dispatch) => {
      try {
        dispatch(this.getUserAccountPending());
        const { data } = await axios.get(
          `http://localhost:3000/accounts/${id}`
        );
        dispatch(this.getUserAccountFulfilled(data?.amount));
      } catch (error) {
        dispatch(this.getUserAccountRejected(error?.message));
      }
    };
  },

  getUserAccountFulfilled(value) {
    return { type: ACTIONS.GET_ACC_USER_FULFILLED, payload: value };
  },

  getUserAccountRejected(error) {
    return { type: ACTIONS.GET_ACC_USER_REJECTED, error: error };
  },

  getUserAccountPending() {
    return { type: ACTIONS.GET_ACC_USER_PENDING };
  },

  increment() {
    return { type: ACTIONS.INCREMENT };
  },

  decrement() {
    return { type: ACTIONS.DECREMENT };
  },

  incrementByAmount(value) {
    return { type: ACTIONS.INCREMENT_BY_AMOUNT, payload: value };
  },

  incrementBonus() {
    return { type: ACTIONS.INCREMENT_BONUS };
  },
};
