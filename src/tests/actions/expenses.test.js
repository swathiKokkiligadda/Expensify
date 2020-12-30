import {addExpenses, editExpense, removeExpense} from '../../actions/expenses';
test('should setup remove expense object', () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({
    type:'REMOVE_EXPENSE',
    id:'123abc'
  })
})
//editExpense test case

test('Should setup edit expense object', () => {
  const action = editExpense('123abc',{note: "This is swathi test"});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {note: "This is swathi test"}
  })
})

//Add Expenses test case
test('Should setup addExpense action Object with provided values', () => {
  const expenseData = {
    description: "Add Coffee test",
    note: "This is expense test",
    amount: 1005,
    createdAt: 1000
  };
  const action = addExpenses(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
      expense:{
        ...expenseData,
        id: expect.any(String)
      }    
  })

})

//test addExpense wen you are not passing an expense value
test('Should setup addExpense action object with default values', () =>{  
  const action = addExpenses();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
    description : "",
    note : "",
    amount : 0,
    createdAt : 0,
    id:expect.any(String)
    }
  })

})