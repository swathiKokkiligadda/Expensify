import React from 'react';
import selectedExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import {connect} from 'react-redux';
import numeral from 'numeral';
import {Link} from 'react-router-dom';

export const ExpenseSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount ===1?'expense':'expenses';
  const formattedExpenseTotal = numeral(expensesTotal/100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">     
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totaling <span>{formattedExpenseTotal}</span></h1>
        <div className="page-header__actions" >
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
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
