import React, { useState } from 'react';
import './App.css';



function App() {
  const [display, setDisplay] = useState('0');
  const [var1, setVar1] = useState('0');
  const [var2, setVar2] = useState('0');
  const [operation, setOperation] = useState('');
  
  const handleVar = (value) =>{
    if(var1 === ''){
      handleNum(value, var1, setVar1);
    }else{
      handleNum(value, var2, setVar2);
    }
  };
  const handleNum = (value, variable, setVariable) => {

    if(display === '0' || display === 'Error'){
      setDisplay(value);
      setVariable(value);
    }else{
      setDisplay(variable+value);
      setVariable(variable+value);
      console.log(variable);
      
    }
  };
  const handleOperation = (value) => {
    setOperation(value);
    console.log(operation);
  }
  const handleClear = () => {
    setDisplay('0');
  };
  const handleEval = () => {
    try{
      setDisplay(eval(var1+operation+var2).toString());
    }
    catch{
      setDisplay('Error');
    }
  };
  return (
    <div className="calculator"> 
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleClear()}>C</button>
        <button >+/-</button>
        <button onClick={() => handleVar('7')}>7</button>
        <button onClick={() => handleVar('8')}>8</button>
        <button onClick={() => handleVar('9')}>9</button>
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleVar('4')}>4</button>
        <button onClick={() => handleVar('5')}>5</button>
        <button onClick={() => handleVar('6')}>6</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleVar('1')}>1</button>
        <button onClick={() => handleVar('2')}>2</button>
        <button onClick={() => handleVar('3')}>3</button>
        <button onClick={() => handleOperation('*')}>*</button>
        <button onClick={() => handleVar('0')}>0</button>
        
        <button onClick={() => handleEval()}>=</button>
      </div>
    </div>
  );
}

export default App;
