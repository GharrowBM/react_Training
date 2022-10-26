import './ExpenseDate.css'

function ExpenseDate(props) {
    const year = props.date.getFullYear()
    const month = props.date.toLocaleDateString('en-us', {month: 'long'})
    const day = props.date.getDate()

    return (
        <div className='expense-item_date'>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
        </div>
    )
}

export default ExpenseDate