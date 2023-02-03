import React, { useState } from "react";
import Card from "./Card";
import classes from "./AddUser.module.css";
import Button from "./Button";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");
  function usernameHandler(e) {
    setUsername(e.target.value);
  }
  function ageHandler(e) {
    setUserAge(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    if(username.trim().length===0&&userAge.trim.length()===0){
      return;
    }
    if(+userAge<1){
      return;
    }
    props.onAddUsers(username,userAge)//not understood
    setUsername("");
    setUserAge("");
  }
  return (
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
  );
};
export default AddUser;
