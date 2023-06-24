import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const appClass = isDarkMode ? "App dark" : "App light";

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  function onItemFormSubmit(newItem) {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
  }
  
  return (
    <div className={appClass}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items}  onItemFormSubmit={onItemFormSubmit} />
    </div>
  );
}

export default App;
