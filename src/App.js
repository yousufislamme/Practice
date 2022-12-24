import React, { useState } from "react";
import ReactDOM from "react-dom/client";
function App() {
  const [name, setName] = useState("Yousuf")

  return (
    <div>
      <h1>My name is: {name}</h1>

      <button type="button" onClick={() => setName("Ibrahim")}>Ibrahim</button>
      <button type="button" onClick={() => setName("Anas")}>Anas</button>
      <button type="button" onClick={() => setName("Aouf")}>Aouf</button>
    </div>
  );
}

export default App;
