import React from "react";
import { useState } from "react";

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <span>Step:</span>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div>
        <span>Count:</span>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          className="input"
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from now it's going to be `
            : `${count} days ago it was `}
          {date.toDateString()}
        </span>
      </div>
      {step === 1 && count === 0 ? (
        ""
      ) : (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </>
  );
}

export default Counter;
