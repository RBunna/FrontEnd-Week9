import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a , setA] = useState(0);
  const [b , setB] = useState(0);
  const [c , setC] = useState();
  const [err, setErr] = useState(false);

  /* You will need some function to handle the key pressed and button events */
  function onA(e) { setA(e.target.value); }
  function onB(e) { setB(e.target.value); }
  function add() { 
    if (isNaN(a) || isNaN(b)) {
      setC("A and B shall be numbers !");
      setErr(true);
    } else {
    setC(parseFloat(a) + parseFloat(b)); 
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input value={c} className={err ? "error" : ""} disabled />
      <button onClick={add}>Compute</button>
    </main>
  );
}

export default App;
