
import React,{useState} from 'react';
import AddUser from './AddUser';
import UserList from './UserList';


function App() {
  const[usersList,setUsersList]=useState([]);
  function addUserHandler(uName,uAge){
    setUsersList((prevList)=>{
      return[...prevList,{name:uName,age:uAge,id:Math.random().toString()}]
    })//not understood uName and uAge logic

  }
  return (
    <div>
<AddUser onAddUsers={addUserHandler}/>
<UserList users={usersList}/>
    </div>
  );
}

export default App;
