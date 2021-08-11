import React, { useState } from 'react';
import axios from "axios";
import  { apiURL } from "../util/apiURL";
import { useHistory } from 'react-router-dom';

const API_BASE = apiURL();

export default function Form() {
    const history = useHistory();
    const [ input, setInput ] = useState({
        Name: "",
        Date: "",
        from: "",
        amount: 0
    })
    const handleInput = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_BASE}/transactions`, input)
        .then(() => history.push("/transactions"), err => console.log(err));
    }



    return (
        <div>
            <h2>New Task Added</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Task Name: </label>
                <input
                type="text"
                value={input.name}
                id="name"
                onChange={handleInput}
                /> <br/>
                <label htmlFor="date">Date: </label> 
                <input
                type="text"
                value={input.date}
                id="date"
                onChange={handleInput}
                /> <br/>
                <label htmlFor="date">From: </label> 
                <input
                type="text"
                value={input.from}
                id="from"
                onChange={handleInput}
                /> <br/>
                <label htmlFor="date">Amount: </label>
                <input
                type="number"
                value={input.amount}
                id="amount"
                onChange={handleInput}
                /> <br/>
                <button>Submit</button>
            </form>


        </div>
    )


}