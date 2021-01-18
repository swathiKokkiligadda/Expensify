import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
})

test('should remove expense by id', () => {
  const action = {type: 'REMOVE_EXPENSE', id: "1"}
  const state = expensesReducer(expenses,action );
  expect(state).toEqual([expenses[1], expenses[2]])
})

test('Should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    payload:'-1'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})

test('should add an expense', () => {
  const expense = { 
  id: '4',
  description: 'makeup',
  note: '',
  amount:2800,
  createdAt: 0
}
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
 
  expect(state).toEqual([...expenses, expense])
})

test('Should edit expense', () => {
  const description = 'Rent to Mike'
  const action = {
    type: 'EDIT_EXPENSE',
    id: "2",
    updates: {description}
  }
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(description)

})

test('Should not edit expense if expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {description: 'Rent to mike'}
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})
test('Should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]])
})