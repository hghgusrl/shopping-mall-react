const foods = [
  { id: 1, name: "Premium Kibble", price: 19.99 },
  { id: 2, name: "Canned Beef", price: 2.99 },
  { id: 3, name: "Chicken Treats", price: 4.49 },
];

function FoodList({ foods, onSelect, onBack }) {
  return (
    <div className="featured">
      <button onClick={onBack}>Back</button>
      <h2>Available Foods</h2>
      <div className="product-grid">
        {foods.map((food) => (
          <div
            className="product-card"
            key={food.id}
            onClick={() => onSelect(food)}
            style={{ cursor: "pointer" }}
          >
            <h4>{food.name}</h4>
            <span>${food.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FoodDetail({ food, onBack }) {
  const [qty, setQty] = React.useState(1);
  const total = (food.price * qty).toFixed(2);
  const handleBuy = () => {
    alert(`Purchased ${qty} ${food.name}(s) for $${total}`);
  };
  return (
    <div className="featured">
      <button onClick={onBack}>Back</button>
      <h2>{food.name}</h2>
      <p>Price: ${food.price.toFixed(2)}</p>
      <label>
        Quantity:
        <input
          type="number"
          min="1"
          value={qty}
          onChange={(e) => setQty(parseInt(e.target.value) || 1)}
        />
      </label>
      <p>Total: ${total}</p>
      <button onClick={handleBuy}>Pay</button>
    </div>
  );
}

window.foods = foods;
window.FoodList = FoodList;
window.FoodDetail = FoodDetail;
