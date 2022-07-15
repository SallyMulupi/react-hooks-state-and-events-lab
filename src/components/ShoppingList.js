import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
    const [selectCategory, setSelectCategory] = useState("All");