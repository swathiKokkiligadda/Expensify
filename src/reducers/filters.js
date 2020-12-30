import moment from 'moment';
const filtersReducerDefault = {
  id: "",
  text: "",
  sortBy: "date",
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};

export default (state = filtersReducerDefault, action) => {
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
