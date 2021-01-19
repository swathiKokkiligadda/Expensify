import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import getVisibleExpenses from "./selectors/expenses";
import AppRouter, {history} from "./routers/AppRouter";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import {firebase} from './firebase/firebase';
import LoadingPage from '../src/components/LoadingPage'
 

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

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
}
ReactDOM.render(<LoadingPage/>, document.getElementById("app"));

 firebase.auth().onAuthStateChanged((user) => {
  if(user){
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if(history.location.pathname === '/'){
        history.push('/dashboard')
      }
    })
  }
  else{
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
}) 
