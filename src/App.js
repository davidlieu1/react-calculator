import React, { useState } from 'react';
import './App.css';



function App() {
  const [display, setDisplay] = useState('0');
  const [var1, setVar1] = useState('0');
  const [var2, setVar2] = useState('0');
  const [operation, setOperation] = useState('');
  const [useAns, setAns] = useState(true); 
  const [after1, setAfter1] = useState(true);
  const [after2, setAfter2] = useState(true);
  const handleVar = (value) =>{
    if(after1){
      setVar1('0');
    }
    if(after2){
      setVar2('0');
    }
    if(useAns){
      handleNum(value, var1, setVar1, after1);
      setAfter1(false);
    }else{
      handleNum(value, var2, setVar2, after2);
      setAfter2(false);
    }
  };
  const handleNum = (value, variable, setVariable, slate) => {
    if(value === '-1'){
      let ans = eval(variable+'*-1').toString();
      setVariable(ans);
      setDisplay(ans);
    }
    else if(variable === '0' || display === 'Error' || slate){
      setVariable(value);
      setDisplay(value);
    }else{
      setVariable(variable+value);
      setDisplay(variable+value);
    }
  };
  const handleOperation = (value) => {
    if(useAns){
      setVar2(var1);
      setAns(false);
      setAfter1(false);
    }
    setOperation(value);
  }
  const handleClear = () => {
    setDisplay('0');
    setVar1('0');
    setVar2('0');
  };
  const handleEval = () => {
    try{
      if(operation !== ''){
        let ans = eval(var1+operation+'('+var2+')').toString();
        setVar1(ans);
        setDisplay(ans);
        setAns(true);
        setAfter1(true);
        setAfter2(true);
      }
    }
    catch{
      setDisplay('Error');
    }
  };
  return (
    <div className="calculator"> 
      <div className="display">{display}</div>
      <div className="buttons">
        <button></button>
        <button onClick={() => handleClear()}>C</button>
        <button>+/-</button>
        <button onClick={() => handleOperation('/')}>/</button>
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
        <button className='widebutton' onClick={() => handleVar('0')}>0</button>
        
        <button onClick={() => handleEval()}>=</button>
      </div>
    </div>
  );
}

export default App;
