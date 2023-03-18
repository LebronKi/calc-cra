import React from 'react';
import '../App.css'

const Buttons = ({handleClick,handleEqual,handleClear}) => {
    return (
        <div className='calculator'>
            <button className='btn' onClick={() => handleClick("7")}>7</button>
            <button className='btn' onClick={() => handleClick("8")}>8</button>
            <button className='btn' onClick={() => handleClick("9")}>9</button>
            <button className="operator" onClick={() => handleClick("/")}>/</button>

            <button className='btn' onClick={() => handleClick("4")}>4</button>
            <button className='btn' onClick={() => handleClick("5")}>5</button>
            <button className='btn' onClick={() => handleClick("6")}>6</button>
            <button className="operator" onClick={() => handleClick("*")}>*</button>

            <button className='btn' onClick={() => handleClick("1")}>1</button>
            <button className='btn' onClick={() => handleClick("2")}>2</button>
            <button className='btn' onClick={() => handleClick("3")}>3</button>
            <button className="operator" onClick={() => handleClick("-")}>-</button>

            <button className='btn bottom-left-corner' onClick={() => handleClick("0")}>0</button>
            <button className="keys" onClick={handleClear}>C</button>
            <button className="keys" onClick={handleEqual}>=</button>
            <button className="operator bottom-right-corner" onClick={() => handleClick("+")}>+</button>
        </div>
    );
};

export default Buttons;