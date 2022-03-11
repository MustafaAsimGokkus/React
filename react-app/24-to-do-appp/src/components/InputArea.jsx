import React from 'react';

const InputArea = () => {
    const [inputText, setInputText] = useState();
    return (
        <div>
            <input type="text"
                placeholder="enter your wish"
                value={inputText}
                onChange={handleChange} />
            <button onClick={addItems}>
                <span>Add</span>
            </button>
        </div>
    )
}

export default InputArea;