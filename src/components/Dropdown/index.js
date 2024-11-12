import "./Dropdown.css"

const Dropdown = ({ label, setSelectValue, required, selectValue, itens }) => {
    return (
        <div className="dropdown">
            <label>{label}</label>
            <select onChange={event => setSelectValue(event.target.value)} required={required} value={selectValue}>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Dropdown;