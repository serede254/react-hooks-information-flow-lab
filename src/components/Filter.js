import React from "react";
function Filter({onCategoryChange,onValue}){
    return(
        <select name="filter" onChange={onCategoryChange} value={onValue}>
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>

    )
}
export default Filter