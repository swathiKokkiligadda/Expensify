import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortbyDate} from '../../actions/filters';
import moment from 'moment';
test('should generate sortByAmount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  })
})

test('should generate sortByDate action object', () => {
  const action = sortbyDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  })
})

test('should generate set text filter action object with default values', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text: ''
  })
})

test('should generate set text filter action object', () => {
  const action = setTextFilter('test');
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text: 'test'
  })
})
test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type:'SET_START_DATE',
    payload: moment(0)
  })
})
test('Should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type:'SET_END_DATE',
    payload:moment(0)
  })
})
