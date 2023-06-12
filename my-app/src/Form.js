import React from "react";
import Login from "./Login";

var userIsRegistered = false;

function Form() {
  return <Login isRegistered={userIsRegistered} />;
}

export default Form;
