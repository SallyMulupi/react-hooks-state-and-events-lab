import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
    const [selectCategory, setSelectCategory] = useState("All");
    function handleCategory(event){
      setSelectCategory(event.target.value);
    }