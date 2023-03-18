import './App.css';
import Buttons from "./components/Buttons";
import {useState} from "react";

function App() {
    const [input,setInput] = useState("")

    const handleChick = (value) => {
        setInput(input + value);
    }
    const handleEqual = () => {
        setInput(eval(input).toString());
    }
    const handleClear = () => {
        setInput(" ");
    }

    return (
    <div className="App">
        <h1>Calculator on REACT</h1>
        <div className="display">{input}</div>
         <Buttons
          handleClick = {handleChick}
          handleEqual = {handleEqual}
          handleClear = {handleClear} />
    </div>
  );
}

export default App;
