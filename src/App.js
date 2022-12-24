import React, { useState } from "react";

function App() {

  const [toggleTabs, setToggleTabs] = useState(1);

  const handleTabs = (index) => {
    setToggleTabs(index);
  }
  return (
    <div className="flex justify-center items-center h-screen bg-red-200">
      <div className="w-[450px] h-[325px] bg-green-100 rounded-t-[34px] rounded-b-[34px]">
        <div className="w-full bg-[#5E5BF3] rounded-t-[34px] flex justify-around py-[20px] text-white font-semibold">

          <button
            className={toggleTabs === 1 ? "bg-green-100  text-green-800" : "bg-[#5E5BF3]"}
            onClick={() => handleTabs(1)}>Tabs 1</button>

          <button
            className={toggleTabs === 2 ? "bg-green-100 text-green-800" : "bg-[#5E5BF3] "}
            onClick={() => handleTabs(2)}>Tabs 2</button>

          <button
            className={toggleTabs === 3 ? "bg-green-100 text-green-800" : "bg-[#5E5BF3]"}
            onClick={() => handleTabs(3)}>Tabs 3</button>

        </div>
        <div className={toggleTabs === 1 ? "p-[20px] block" : "hidden"}>
          <p className="text-green-800">
            <h2>Item 1</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, architecto.</p>
        </div>
        <div className={toggleTabs === 2 ? "p-[20px] block" : "hidden"}>
          <p className="text-green-800">
            <h2>Item 2</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, architecto.</p>
        </div>
        <div className={toggleTabs === 3 ? "p-[20px] block" : "hidden"}>
          <p className="text-green-800">
            <h2>Item 3</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, architecto.</p>
        </div>
      </div>

    </div>
  );
}

export default App;
