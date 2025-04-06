import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);
  function handleStep(e) {
    setStep(Number(e.target.value));
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }
  return (
    <div className="date-counter-wrapper">
      <input type="range" value={step} onChange={handleStep} min={1} max={10} />
      {step}
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <input
          type="text"
          value={Number(count)}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <p>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count * step} days from now is `
          : `${Math.abs(count * step)} days ago was `}
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
}

export default App;
