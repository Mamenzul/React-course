import React, { useState } from "react";
import Card from "./Card";
import styles from "./UserForm.module.css";
const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const submitHandler = (event) => {
    const userData ={
      username: username,
      age: age,
      id: Math.random().toString()
    };
    event.preventDefault();
    props.onAddUSer(userData);
    setUsername('');
    setAge('');
  };
  return (
    <Card>
      <form className={styles.input} onSubmit={submitHandler}>
        <div>
          <label>Username</label>
          <input type="text" name="username" value={username} onChange={usernameHandler}></input>
        </div>
        <div>
          <label>Age (Years)</label>
          <input type="number" name="age" value={age} onChange={ageHandler}></input>
        </div>
        <div>
          <button>Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
