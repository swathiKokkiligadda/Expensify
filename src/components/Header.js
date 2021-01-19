import { NavLink } from "react-router-dom";
import React from "react";
import {connect} from 'react-redux';
import {startLogOut} from '../actions/auth';

export const Header = ({startLogOut}) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="is-active">
      Dashboard
    </NavLink>
    <br />
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
    <br />
    <button onClick={startLogOut}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogOut: () => dispatch(startLogOut())
})

export default connect(undefined,mapDispatchToProps)(Header);
