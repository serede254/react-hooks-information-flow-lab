import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";
import Header from "./Header";

function App() {
  const [isDark,setIsDark]=useState(false);
  function handleClick(){
    setIsDark(!isDark)

  }


  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDark ? "App dark" : "App light"
  const buttonText= isDark? "Light Mode" : "Dark Mode"
  return (
    <div className={appClass}>
      <Header onDarkModeClick={handleClick} buttonText={buttonText}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;