export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

// sort by amount action generator
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
  
});

//sort by date action generator
export const sortbyDate = () => ({
  type: "SORT_BY_DATE",
  
});

export const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  payload: startDate,
});

export const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  payload: endDate,
});
