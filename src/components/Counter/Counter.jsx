import { useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const [inputValue, setInputValue] = useState(1);

  const handleIncreaseCounter = () => {
    setCounter(prev => prev + step);
  }

  const handleDecreaseCounter = () => {
    setCounter(prev => prev - step);
  }

  const handleSetStep = () => {
    setStep(inputValue);
  }
  const handleReset = () => {
    setCounter(0);
    setStep(1);
    setInputValue(1);
  }
  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input type='number' 
          value={inputValue} onChange={e => setInputValue(+e.target.value)}
        />
        <button className={s.inputBtn} onClick={handleSetStep}>Set step</button>
        <div className={s.flex}>
          <button onClick={handleDecreaseCounter} className='btn'>minus</button>
          <button onClick={handleReset} className='btn'>reset</button>
          <button onClick={handleIncreaseCounter} className='btn'>plus</button>
        </div>
      </div>
    </div>
  );
};
