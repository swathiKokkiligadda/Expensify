import React from 'react';
import selectedExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import {connect} from 'react-redux';
import numeral from 'numeral';

export const ExpenseSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount ===1?'expense':'expenses';
  const formattedExpenseTotal = numeral(expensesTotal/100).format('$0,0.00');
  return (
    <div>
    <h1>Viewing {expenseCount} {expenseWord} totaling {formattedExpenseTotal}</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectedExpenses(state.expenses, state.filters);
  return{
    expenseCount:visibleExpenses.length,
    expensesTotal:expensesTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpenseSummary);
