function ExpensesFilter(props) {
    const selectedYearChangeHandler = (e) => {
        props.selectedYearChanged(e.target.value)
    }

    return (
        <div className="flex w-full justify-between items-center p-4 bg-slate-700 rounded">
            <label htmlFor="selectedYear" className="text-white">Filter by year</label>
            <select className="appearance-none p-1 px-8 rounded" name="selectedYear" id="selectedYear" value={props.selectedYear} onChange={selectedYearChangeHandler}>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    )
}

export default ExpensesFilter