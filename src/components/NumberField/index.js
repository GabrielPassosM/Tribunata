import "./NumberField.css"

const NumberField = ({ label, inputValue, setInputValue, required }) => {
    return (
        <div className="number-field">
            <label>{label}</label>
            <input type="number" min={0} max={1000} value={inputValue} onChange={event => setInputValue(event.target.value)} required={required} />
        </div>
    )
}

export default NumberField