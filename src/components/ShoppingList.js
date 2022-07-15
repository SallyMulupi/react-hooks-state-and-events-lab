import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
    const [selectCategory, setSelectCategory] = useState("All");
    function handleCategory(event){
      setSelectCategory(event.target.value);
    }
    const itemToDisplay=items.filter((item)=>{
      if(selectCategory === "All")return true;
      return item.category === selectCategory;

    });
    return (
      <div className="ShoppingList">
        <div className="Filter">
        <select name="filter"  onChange={handleCategory}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        </div>
      </div>