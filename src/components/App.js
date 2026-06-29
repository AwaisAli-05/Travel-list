import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Packinglist from "./Packinglist";
import State from "./State";

export default function App() {
  const [item, setItem] = useState([]);

  function handleAddItem(item) {
    setItem((previtems) => [...previtems, item]);
  }

  function handleDeleteItem(id) {
    setItem((arrayofitems) => arrayofitems.filter((i) => i.id !== id));
  }

  function handlePacked(id) {
    setItem((arrayofitems) =>
      arrayofitems.map((i) => (i.id === id ? { ...i, packed: !i.packed } : i)),
    );
  }
  function handleClearList() {
    const confirm = window.confirm("Are you sure you want to clear the list?");
    if (!confirm) return;
    setItem([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdditem={handleAddItem} />
      <Packinglist
        items={item}
        onDeleteItem={handleDeleteItem}
        onPacked={handlePacked}
        onClearList={handleClearList}
      />
      <State items={item} />
    </div>
  );
}
