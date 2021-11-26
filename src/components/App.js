import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const [isDark, setOn] = useState(false);

function handleDarkModeClick() {
  setOn((isDarkMode) => !isDarkMode);
}
  

  return (
    <div className={"App " + (isDark ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDark ? "dark" : "light"} Mode
          </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
