import React, { useState } from "react";

function App() {

  const [tabs, setTabs] = useState(1);

  const handleTabs = (index) => {
    console.log('Hello world');
  }
  return (
    <div>
      <h2>This is a tab</h2>
      <button onClick={() => handleTabs(1)}>Click</button>

    </div>
  );
}

export default App;
