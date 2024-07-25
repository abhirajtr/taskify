import React from "react";
import './styles.css'

const InputField: React.FC = () => {
    return (
        <form className="input">
            <input
                type="input"
                placeholder="Enter a task" 
                className="input_box"
            />
            <button className="input_submit" type="submit">G0</button>
        </form>
    )
}

export default InputField;