import React from "react";
import classes from "./UsersList.module.css";
import Card from "./Card";
const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name}({user.age} in years)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
