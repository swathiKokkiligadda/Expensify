import { NavLink } from "react-router-dom";
import React from "react";
const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>
    <br />
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
    <br />
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
    <br />
  </header>
);
export default Header;
