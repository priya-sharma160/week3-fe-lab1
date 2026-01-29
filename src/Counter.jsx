import './Counter.css';

const Counter = () => {
  let theme = 'light';

  const setDarkTheme = () => {
    theme = 'dark';
    console.log(theme);
  };

  const setLightTheme = () => {
    theme = 'light';
    console.log(theme);
  };

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={setDarkTheme}>Dark</button>
      <button onClick={setLightTheme}>Light</button>
      <p>
        Current theme (logged only): <strong>{theme}</strong>
      </p>
    </div>
  );
};

export default Counter;