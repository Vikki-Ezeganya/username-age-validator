import React, { useState } from "react";
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from "../UI/Button";

const AddUser = (props) => {

    const[enteredUserName, setEnteredUsername] = useState('');
    const[enteredAge, setEnteredAge] = useState('');


    const userNameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();

        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            console.log('invalid input!');
            return;
        }

        if(+enteredAge < 1) {
            console.log('age should be > 1!');
            return;
        }

        console.log(enteredUserName, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    return(
        <Card className={classes.input}> 
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" value={enteredUserName} type="text" onChange={userNameChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;