import { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpensesChart from "./components/Expenses/ExpensesChart";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import NewExpense from "./components/Expenses/NewExpense";

function App() {
  const [selectedYear, setSelectedYear] = useState('2020')
  const [expenses, setExpenses] = useState([
    {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
    {title: 'Gas Bill', amount: 147.69, date: new Date(2020, 0, 13)},
    {title: 'Vet for Doggo', amount: 47.69, date: new Date(2020, 4, 6)},
    {title: 'Health Care', amount: 207.23, date: new Date(2019, 8, 7)},
  ])
  const [filteredExpenses, setFilteredExpenses] = useState(expenses.filter(e => e.date.getFullYear() === 2020))

  const saveExpenseHandler = (newExpense) => {
    setExpenses((state) => {
      return [...state, {...newExpense, date: new Date(newExpense.date)}]
    })
  }

  const selectedYearChangedHandler = (newValue) => {
    setSelectedYear(newValue)
    setFilteredExpenses(expenses.filter(e => e.date.getFullYear().toString() === newValue))
  }

  return (
    <div className="container mx-auto">
      <NewExpense onSaveExpense={saveExpenseHandler} />
      <ExpensesFilter selectedYear={selectedYear} selectedYearChanged={selectedYearChangedHandler} />
      <ExpensesChart expenses={filteredExpenses}/>
      {filteredExpenses.length > 0 ? filteredExpenses.map((e, i) => <ExpenseItem title={e.title} amount={e.amount} date={e.date} key={i}/>) : <p className="my-2 text-white bg-gray-600 p-4 rounded">Nothing to see in {selectedYear}...</p>}
    </div>
  );
}

export default App;
