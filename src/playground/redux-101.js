import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const setCount = ({ count = 0 } = {}) => ({
  type: "SET",
  count,
});
const resetCount = () => ({
  type: "RESET",
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      /*       const decrementBy =
        typeof action.decrementBy == "number" ? action.decrementBy : 1; */
      return {
        count: state.count - action.decrementBy,
      };
    case "RESET":
      return {
        count: 0,
      };
    case "SET":
      return {
        count: action.count,
      };
    default:
      return state;
  }
};
const store = createStore(countReducer);
store.subscribe(() => {
  console.log(store.getState());
});

/* store.dispatch({
  type: "INCREMENT",
  incrementBy: 5,
}); */
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({ count: 100 }));
store.dispatch(resetCount());
/* store.dispatch({
  type: "DECREMENT",
  decrementBy: 10,
}); */

/* store.dispatch({
  type: "SET",
  count: 101,
}); */
