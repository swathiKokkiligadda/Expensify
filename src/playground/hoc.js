import React from "react";
import ReactDOM from "react-dom";
//HOC a component which renders
//resuse code
//render hijacking
//prop manipulation
//abstract state

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The Info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private Info. Please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  ); //higher order component
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view the info</p>
      )}
    </div>
  );
};
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

/* ReactDOM.render(
  <AdminInfo isAdmin={false} info="There are the details" />,
  document.getElementById("app")
); */
ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="There are the details" />,
  document.getElementById("app")
);
