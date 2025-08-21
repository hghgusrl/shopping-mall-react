const toiletItems = [
  // TODO: Replace with backend API data
  { id: 1, name: "모래 화장실", image: "https://via.placeholder.com/150?text=Litter" },
  { id: 2, name: "배변 봉투", image: "https://via.placeholder.com/150?text=Bags" },
];

function ToiletPage({ onBack }) {
  return (
    <div className="category-page">
      <button onClick={onBack}>뒤로가기</button>
      <h2>배변 용품</h2>
      <div className="product-grid">
        {toiletItems.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

window.ToiletPage = ToiletPage;
