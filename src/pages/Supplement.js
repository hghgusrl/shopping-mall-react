const supplementItems = [
  // TODO: Replace with backend API data
  { id: 1, name: "비타민", image: "https://via.placeholder.com/150?text=Vitamin" },
  { id: 2, name: "관절 영양제", image: "https://via.placeholder.com/150?text=Joint" },
];

function SupplementPage({ onBack }) {
  return (
    <div className="category-page">
      <button onClick={onBack}>뒤로가기</button>
      <h2>영양제</h2>
      <div className="product-grid">
        {supplementItems.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

window.SupplementPage = SupplementPage;
