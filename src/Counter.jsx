 import './Counter.css';
import { useState } from 'react';

const Counter = () => {
  const [theme, setTheme] = useState('light');

  const toggleThemeHandler = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={toggleThemeHandler}>Toggle Theme</button>
    </div>
  );
};

export default Counter;