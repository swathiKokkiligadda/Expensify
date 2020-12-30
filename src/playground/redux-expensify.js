import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";

//edit expense
//set text filter
//sort by Date
//sort by amount
//sort by start date
//sort by end date

//Add expense action generator
export const addExpenses = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  },
});

//remove expense action generator
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  payload: id,
});
//edit expense action generator
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});
//set text filter action generator
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

// sort by amount action generator
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
  payload: "amount",
});

//sort by date action generator
const sortbyDate = () => ({
  type: "SORT_BY_DATE",
  payload: "date",
});

const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  payload: startDate,
});

const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  payload: endDate,
});

const expensesReducerDefault = [];

const expensesReducer = (state = expensesReducerDefault, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter((item) => {
        return item.id !== action.payload;
      });
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        }
      });

    default:
      return state;
  }
};

const filtersReducerDefault = {
  id: "",
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefault, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.payload,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.payload,
      };

    default:
      return state;
  }
};
//Get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate != "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate != "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expense1 = store.dispatch(
  addExpenses({ description: "JanuaryRent", amount: 100, createdAt: -21000 })
);
const expense2 = store.dispatch(
  addExpenses({ description: "coffee", amount: 300, createdAt: -1000 })
);

//store.dispatch(removeExpense({ id: expense1.expense.id }));
//store.dispatch(editExpense(expense2.expense.id, { amount: 500 }));
//store.dispatch(setTextFilter("rent"));
//store.dispatch(setTextFilter(""));
store.dispatch(sortByAmount());
//store.dispatch(sortbyDate());
//store.dispatch(setStartDate(0));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(9999));
const demoState = {
  expenses: [
    {
      id: "kjkaisduyt62e5672",
      description: "January rent",
      note: "this was the final payment for that address",
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
