import React from "react";
import { useState } from "react";
function App() {
  /* You will need to use a boolean state to keep the value of the text entered */
  const [upper, setUpper] = useState("");

  /* You will need a function to handle a key pressed on the first input and update the state*/
  function keyPressed (e) {
    setUpper(e.target.value.toUpperCase());
  }
  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input onChange={keyPressed} />

      <p>
        <label>Here is the text in upper case</label>

        {/* This input will need to display the text entered in lower case */}
        <input value={upper} disabled />
      </p>
    </main>
  );
}

export default App;
