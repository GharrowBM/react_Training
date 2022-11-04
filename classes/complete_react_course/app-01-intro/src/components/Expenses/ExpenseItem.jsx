import { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const changeTitle = () => {
        setTitle('Renard')
    };

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item_description">
                <h2>{title}</h2>
                <div className="expense-item_price">${props.amount}</div>
                <button
                    onClick={changeTitle}
                    className="ml-2 px-2 py-1 bg-black border border-white rounded-lg"
                >
                    Change Title
                </button>
            </div>
        </div>
    );
}

export default ExpenseItem;
