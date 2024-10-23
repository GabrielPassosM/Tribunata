import "./TextField.css"

const TextField = (props) => {
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.inputValue} onChange={event => props.setInputValue(event.target.value)} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField