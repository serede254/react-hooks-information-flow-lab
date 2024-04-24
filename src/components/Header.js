import React from "react";
function Header({onDarkModeClick,buttonText}){
    return(
<header>
        <h2>Shopster</h2>
        <button  onClick={onDarkModeClick}>{buttonText}</button>
      </header>
      )
}
export default Header;