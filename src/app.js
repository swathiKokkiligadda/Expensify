import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import { addExpenses } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import './firebase/firebase';

const store = configureStore();
const state = store.getState();
//add expense - water bill
// addexpense - gas bill
//settextfilter - bill - water
// getvisibleexpenses -print visible ones to screen
store.subscribe(() => {
  const state = store.getState();
  getVisibleExpenses(state.expenses, state.filters);
});
/* store.dispatch(addExpenses({ description: "Water bill", amount: 4500 }));
store.dispatch(
  addExpenses({ description: "rent", amount: 13500, createdAt: 1000 })
);
store.dispatch(addExpenses({ description: "Gas bill" })); */

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
