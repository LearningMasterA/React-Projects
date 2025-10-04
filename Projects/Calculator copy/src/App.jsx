import styles from './App.module.css';
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
import { useState } from 'react';

function App() {
// let buttons=['C','1','2','+',[3,4,5,'-'],[6,7,8,'*'],[9,0,'=','/']];

let [calVal,setCalVal]=useState("");
const onButtonClick=(buttonText)=>{
  if(buttonText==='='){
    const evaluatedValue=eval(calVal);
    setCalVal(evaluatedValue)
  }
  else if(buttonText==='C'){
    setCalVal("");
  }
  else{
    const newDisplayValue=calVal + buttonText;
    setCalVal(newDisplayValue);
  }
}

  return <>
  <div className={styles.calculator}>
    <Display calVal={calVal}></Display>
    <ButtonsContainer 
    onButtonClick={onButtonClick}
    ></ButtonsContainer>
  </div>

  </>
}

export default App
