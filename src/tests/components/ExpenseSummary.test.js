import React from 'react';
import {ExpenseSummary} from '../../components/ExpenseSummary';
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses';

test('should correctly render expensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal ={235}/>);
  expect(wrapper).toMatchSnapshot();
})

test('should correctly render expensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal ={233435}/>);
  expect(wrapper).toMatchSnapshot();
})