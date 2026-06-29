export default function Item({ item, deleteItem, onPacked }) {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onPacked(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <span onClick={() => deleteItem(item.id)}>❌</span>
      </li>
    </div>
  );
}
