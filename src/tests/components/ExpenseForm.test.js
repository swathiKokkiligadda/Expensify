import React from 'react';
import ExpenseForm from '../../components/ExpenseForm';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render expenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper).toMatchSnapshot();
})

test('should render expenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense = {expenses[0]}/>);
  expect(wrapper).toMatchSnapshot();
})

test('Should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
})

test('Should set description on input change', () => {
  const value = 'New Description';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('description')).toBe(value);
})

test('Should set note on textarea change', () => {
  const value = "New note";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: {value}
  });
  expect(wrapper.state('note')).toBe(value)
})

test('Should set amount if the input is valid', () => {
  const value = '23.40';
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  })
  expect(wrapper.state('amount')).toBe(value);
})

test('Should not set amount if the input is invalid', () => {
  const value = '23.2333';
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  })
  expect(wrapper.state('amount')).toBe('');
})

test('Should call onsubmit prop for valid submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit = {onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {
    }
  })
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  })
})

test('Should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
})

test('Should set calander focus on change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
  expect(wrapper.state('calendarFocused')).toEqual(focused)
})