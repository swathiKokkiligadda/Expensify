import { v4 as uuidv4 } from "uuid";
//Add expense action generator
export const addExpense = ({
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
  id: id,
});
//edit expense action generator
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

