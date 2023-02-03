import React, { useState } from "react";
import Card from "./Card";
import classes from "./AddUser.module.css";
import Button from "./Button";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();
  function usernameHandler(e) {
    setUsername(e.target.value);
  }
  function ageHandler(e) {
    setUserAge(e.target.value);
  }
  
  function submitHandler(e) {
    e.preventDefault();
    if (username.trim().length === 0 && +userAge.trim.length() === 0) {
      setError({
        title: "invalid input",
        message: "please enter valid name and age",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "invalid age",
        message: "please enter valid age.(>0)",
      });
      return;
    }
    props.onAddUsers(username, userAge); //not understood
    setUsername("");
    setUserAge("");
  }
  
  function errorHandler(){
    setError(null)
  }
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={username}
            type="text"
            onChange={usernameHandler}
          />
          <label htmlFor="age">Age(years)</label>
          <input id="age" type="number" value={userAge} onChange={ageHandler} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
