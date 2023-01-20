import React, { useState } from "react";
import UserForm from "./components/UserForm";
import ListUsers from "./components/ListUsers";

function App() {
  const staticList = [
    {
      username: "victor",
      age: 26,
      id: "trucmuche",
    },
  ];
  const [userList, setUserList] = useState(staticList);
  const addUserHandler = (user) => {
    setUserList((prevList) => {
      return [user, ...prevList];
    });
  };
  return (
    <div>
      <UserForm onAddUSer={addUserHandler} />
      <ListUsers Users={userList} />
    </div>
  );
}

export default App;
