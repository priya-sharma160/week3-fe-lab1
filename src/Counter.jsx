 import './Counter.css';
import { useState } from 'react';

const Counter = () => {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);

  const toggleThemeHandler = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const incrementHandler = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementHandler = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={toggleThemeHandler}>Toggle Theme</button>

      <h2>{count}</h2>

      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
};

export default Counter;