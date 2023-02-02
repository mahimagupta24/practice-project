import React from "react";

const AddUser=props=>{
    function submitHandler(e){
e.preventDefault()
    }
return <form onSubmit={submitHandler}>
    <label htmlFor="username">Username</label>
    <input id="username"type="text"/>
    <label htmlFor="age">Age(years)</label>
    <input id="age"type="number"/>
    <button type="submit">Submit</button>
</form>
}
export default AddUser;