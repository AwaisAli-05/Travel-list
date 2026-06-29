import { useState } from "react";
import Item from "./Item";

export default function Packinglist({
  items,
  onDeleteItem,
  onPacked,
  onClearList,
}) {
  const [sortBY, setSortBy] = useState("input");
  let OrderOfSort;
  if (sortBY === "input") {
    OrderOfSort = items;
  }
  if (sortBY === "alphabetically") {
    OrderOfSort = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBY === "Packed") {
    OrderOfSort = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {OrderOfSort.map((item) => (
          <Item
            item={item}
            key={item.id}
            deleteItem={onDeleteItem}
            onPacked={onPacked}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBY} onChange={(e) => setSortBy(e.target.value)}>
          <option value={"input"}>Sort by input</option>
          <option value={"alphabetically"}>Sort alphabetically</option>
          <option value={"Packed"}>Sort by packed status</option>
        </select>
        <button onClick={() => onClearList()}>Clear list</button>
      </div>
    </div>
  );
}
