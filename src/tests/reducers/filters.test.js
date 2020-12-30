import filtersReducer from '../../reducers/filters';
import moment from 'moment';



test('Should setup default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({
  id: "",
  text: "",
  sortBy: "date",
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
  })
})

test('should set sortby to amount', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT', payload: 'amount'});
  expect(state.sortBy).toBe('amount')
})

test('should set sortby to date', () => {
  const currentState = {
  id: "",
  text: "",
  sortBy: "amount",
  startDate: undefined,
  endDate: undefined,
  }
  const state = filtersReducer(currentState, {type: 'SORT_BY_DATE', payload: 'date'});
  expect(state.sortBy).toEqual('date')
})

test('should set text filter', () => {
  const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'e'});
  expect(state.text).toBe('e');
})

test('should set startDate filter', () => {
  const payload = moment(0);
  const state = filtersReducer(undefined, {type: 'SET_START_DATE', payload });
  expect(state.startDate).toEqual(payload);
})

test('should set end date filter', () => {
  const payload = moment(0);
  const state = filtersReducer(undefined, {type: 'SET_END_DATE', payload});
  expect(state.endDate).toBe(payload)
})