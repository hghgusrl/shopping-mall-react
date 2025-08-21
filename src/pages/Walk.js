const walkItems = [
  // TODO: Replace with backend API data
  { id: 1, name: "리드줄", image: "https://via.placeholder.com/150?text=Leash" },
  { id: 2, name: "하네스", image: "https://via.placeholder.com/150?text=Harness" },
];

function WalkPage({ onBack }) {
  return (
    <div className="category-page">
      <button onClick={onBack}>뒤로가기</button>
      <h2>산책 용품</h2>
      <div className="product-grid">
        {walkItems.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

window.WalkPage = WalkPage;
