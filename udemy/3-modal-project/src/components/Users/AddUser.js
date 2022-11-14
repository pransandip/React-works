import { useState, useRef } from "react";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

import classes from './AddUser.module.css'

const AddUser = props => {
    // Define state
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState()

    // Define ref
    // useRef() gives us object nd has property 'current'   
    const nameInputRef = useRef('hi');
    const ageInputRef = useRef(25);

    const addUserHandler = (e) => {
        e.preventDefault()
        // if (userName.trim().length === 0 || age.trim().length === 0) return;
        // if (+age < 1) return;
        // console.log(nameInputRef.current.value)
        // console.log(ageInputRef.current.value)
        if (userName.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter valid name and age (non-empty values).'
            })
            return;
        }
        if (+age < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter valid age (it should be grater then 0).'
            })
            return;
        }
        // props.onAddUser({ userName, age })
        props.onAddUser(userName, age)
        setUserName('');
        setAge('');
    }

    const modalBtnClose = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={modalBtnClose} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={userName}
                        ref={nameInputRef}
                        onChange={
                            (e) => setUserName(e.target.value)
                        }
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        value={age}
                        ref={ageInputRef}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser