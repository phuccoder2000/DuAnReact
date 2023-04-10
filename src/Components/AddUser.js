import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const AddUser = (props) => {
    // state = {
    //     name: "",
    //     address: "phucdeptrai",
    //     age: ''
    // }
    const [name, setName] = useState('')
    const [address, setAddress] = useState('phucdeptrai')
    const [age, setAge] = useState('')

    const handleOnchane = (event) => {
        // this.setState(
        //     {
        //         name: event.target.value
        //     }
        // )
        setName(event.target.value)
    }
    const handleOnchaneAge = (event) => {

        setAge(event.target.value)
    }

    const handleOnsubmit = (event) => {
        event.preventDefault();
        const id = uuidv4(); /// thư viện  UUID
        props.handleAddNewUser({
            id: id,
            name: name,
            age: age

        })
    }
    return (
        <div>
            My name is {name} and i'm age{age}
            <form onSubmit={(event) => handleOnsubmit(event)} >
                <label>your Name :</label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => handleOnchane(event)}></input>
                <label>your Age :</label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => handleOnchaneAge(event)}></input>
                <button >summit</button>
            </form>
        </div>
    )


}
export default AddUser