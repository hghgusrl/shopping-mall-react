const snackItems = [
  // TODO: Replace with backend API data
  { id: 1, name: "비스킷", image: "https://via.placeholder.com/150?text=Biscuit" },
  { id: 2, name: "육포", image: "https://via.placeholder.com/150?text=Jerky" },
];

function SnackPage({ onBack }) {
  return (
    <div className="category-page">
      <button onClick={onBack}>뒤로가기</button>
      <h2>간식</h2>
      <div className="product-grid">
        {snackItems.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

window.SnackPage = SnackPage;
