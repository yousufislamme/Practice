import React, { useState } from "react";
import ReactDOM from "react-dom/client";
function App() {
  const [name, setName] = useState("Yousuf")

  return (
    <div>
      <h1>My name is: {name}</h1>


    </div>
  );
}

export default App;
