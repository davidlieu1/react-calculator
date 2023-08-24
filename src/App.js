import React, { useState } from 'react';
import './App.css';
import ValueDisplay from './ValueDisplay.js';

function App() {
  /*/
    display is the value that will be displayed on screen
    var1 is the first variable used to calculate
    var2 is the second variable used to calculate
    operation is the selected mathematical operation
    useAns decides whether or not to use previous answer
    after1 & after2 decides whether or not to reset var1/var2 to 0 respectively
  /*/
  const [display, setDisplay] = useState('0');
  const [var1, setVar1] = useState('0');
  const [var2, setVar2] = useState('0');
  const [operation, setOperation] = useState('');
  const [useAns, setAns] = useState(true); 
  const [after1, setAfter1] = useState(true);
  const [after2, setAfter2] = useState(true);

  /*/
    handleVar accepts a value input by the user,
    then decides which variable(var1/var2) will be modified
  /*/
  const handleVar = (value) =>{
    if(after1 && (value === '-1' || value === '.01')){
      handleNum(value, var1, setVar1, false);
    }else if(useAns){
      handleNum(value, var1, setVar1, after1);
      setAfter1(false);
    }else{
      handleNum(value, var2, setVar2, after2);
      setAfter2(false);
    }
  };
  /*/
    handleNum takes the input value(value), 
    the variable(variable) and its setter(setVariable) decided by handleVar,
    and appends the given value to the end of the variable.
    slate(bool) indicates whether or not to clear the variable before appending.
  /*/
  const handleNum = (value, variable, setVariable, slate) => {
    let currVal = variable;
    if(slate){
      currVal = '0';
    }
    if(value === '.01'){
      let ans = eval(currVal+'*'+value).toString();
      setVariable(ans);
      setDisplay(ans);
    }
    else if(value == '.'){
      let decimal = false;
      for(let i = 0; i < currVal.length; i++){
        if(currVal[i] == '.'){
          decimal = true;
        }
      }
      if(!decimal){
        let ans = currVal+'.';
        setVariable(ans);
        setDisplay(ans);
      }
    }else if(value === '-1'){
      if(currVal[0] === '-'){
        let ans = currVal.slice(1);
        setVariable(ans);
        setDisplay(ans);
      }else{
        let ans = '-'+currVal;
        setVariable(ans);
        setDisplay(ans);
      }
    }else if(currVal === '0' || display === 'Error' || slate){
      setVariable(value);
      setDisplay(value);
    }else if(currVal === '-0'){
      let ans = '-'+value;
      setVariable(ans);
      setDisplay(ans);
    }else{
      let ans = currVal+value;
      setVariable(ans);
      setDisplay(ans);
    }
  };
  const handleOperation = (value) => {
    setAns(false);
    setAfter1(false);
    setOperation(value);
  }
  /*/
    sets the variables & display (var1, var2, display) to 0.
  /*/
  const handleClear = () => {
    setDisplay('0');
    setVar1('0');
    setVar2('0');
    setAns(true);
    setAfter1(true);
    setAfter2(true);
    setOperation('');
  };
  /*/
    evaluates expression given var1 operation var2
  /*/
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
    <div className='calculator-container'>
      <div className="calculator"> 
        <ValueDisplay value = {display}/>
        <div className="buttons">
        
          <button className='button-another' onClick={() => handleClear()}>C</button>
          <button className='button-another' onClick={() => handleVar('-1')}>+/-</button>
          <button className='button-another' onClick={() => handleVar('.01')}>%</button>
          <button className='button-operation' onClick={() => handleOperation('/')}>/</button>
          <button onClick={() => handleVar('7')}>7</button>
          <button onClick={() => handleVar('8')}>8</button>
          <button onClick={() => handleVar('9')}>9</button>
          <button className='button-operation' onClick={() => handleOperation('*')}>x</button>
          <button onClick={() => handleVar('4')}>4</button>
          <button onClick={() => handleVar('5')}>5</button>
          <button onClick={() => handleVar('6')}>6</button>
          <button className='button-operation' onClick={() => handleOperation('-')}>-</button>
          <button onClick={() => handleVar('1')}>1</button>
          <button onClick={() => handleVar('2')}>2</button>
          <button onClick={() => handleVar('3')}>3</button>
          <button className='button-operation' onClick={() => handleOperation('+')}>+</button>
          <button className='big' onClick={() => handleVar('0')}>0</button>
          <button onClick={() => handleVar('.')}>.</button>
          <button className='button-operation' onClick={() => handleEval()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
