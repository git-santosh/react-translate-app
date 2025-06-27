
import Flower from "./svg/Flower";
export default function Field({ value , onChange = () => {} }) {

    // This component renders a text input field for entering text to be translated.
    // It accepts `value` and `onChange` props to control the input value and handle changes.
    const handleChange = (e) => {
        // console.log(e.target.value);
        onChange(e.target.value);
    };
    // The input field is controlled by the `value` prop and calls `onChange` when the value changes.
    return (
        <div className="field">
            <Flower className="flower-right" fill="rgb(185, 46, 21)" />
            <Flower className="flower-left" fill="rgb(144, 58, 143)" />
            <h1> Translate App </h1>
            <label htmlFor="inputText">Enter text to translate:</label>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Type here..."
                onChange={handleChange}
            />
        </div>
    );
 
}