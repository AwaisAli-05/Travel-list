export default function State({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your Packing list🚀</em>
      </p>
    );
  }
  const numOFitems = items.length;
  const numOFpackedItems = items.filter((item) => item.packed).length;
  const percentage = (numOFpackedItems * 100) / numOFitems;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are Ready to go ✈️"
          : `You have ${numOFitems} items in your list and you already packed ${numOFpackedItems}  (${Math.round(percentage)}%)`}
      </em>
    </footer>
  );
}
