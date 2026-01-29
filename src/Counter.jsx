import './Counter.css';

const Counter = () => {
    const handleClick = () => {
    console.log('Button clicked');
  };

return (
   <div className="state">
      <h1>UseState Component</h1>
      <button onClick={handleClick}>Dark</button>
      <button onClick={handleClick}>Light</button>
      <h2>DISPLAY COUNT HERE</h2>
      <button>Increment</button>
      <button>Decrement</button>
   </div>
);
};

export default Counter;