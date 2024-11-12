import "./TextField.css"

const TextField = ({ label, inputValue, setInputValue, required, placeholder }) => {
    return (
        <div className="text-field">
            <label>{label}</label>
            <input value={inputValue} onChange={event => setInputValue(event.target.value)} required={required} placeholder={placeholder}/>
        </div>
    )
}

export default TextField