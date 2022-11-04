import { useState } from "react";
import "./NewExpense.css";

function NewExpense(props) {
    const [newExpense, setNewExpense] = useState({
        title: "",
        amount: 0,
        date: "2021-01-01",
    });

    const submitHandler = (event) => {
        event.preventDefault();
        
        props.onSaveExpense(newExpense)

        setNewExpense({
            title: "",
            amount: 0,
            date: "2021-01-01",
        });
    };

    const titleChangeHandler = (event) => {
        setNewExpense((state) => {
            return {
                ...state,
                title: event.target.value,
            };
        });
    };

    const amountChangeHandler = (event) => {
        setNewExpense((state) => {
            return {
                ...state,
                amount: +event.target.value,
            };
        });
    };

    const dateChangeHandler = (event) => {
        setNewExpense((state) => {
            return {
                ...state,
                date: event.target.value,
            };
        });
    };

    return (
        <form className="new-expense" onSubmit={submitHandler}>
            <div className="new-expense-item">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={newExpense.title}
                    onChange={titleChangeHandler}
                />
            </div>
            <div className="new-expense-item">
                <label htmlFor="amount">Amount:</label>
                <input
                    type="number"
                    name="amount"
                    id="amount"
                    min="0.01"
                    step="0.01"
                    value={newExpense.amount}
                    onChange={amountChangeHandler}
                />
            </div>
            <div className="new-expense-item">
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    min="2019-01-01"
                    max="2022-12-31"
                    value={newExpense.date}
                    onChange={dateChangeHandler}
                />
            </div>
            <div className="new-expense-button-container">
                <button>Send</button>
            </div>
        </form>
    );
}

export default NewExpense;
