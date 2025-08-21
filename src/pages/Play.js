const playItems = [
  // TODO: Replace with backend API data
  { id: 1, name: "공", image: "https://via.placeholder.com/150?text=Ball" },
  { id: 2, name: "로프 장난감", image: "https://via.placeholder.com/150?text=Rope" },
];

function PlayPage({ onBack }) {
  return (
    <div className="category-page">
      <button onClick={onBack}>뒤로가기</button>
      <h2>놀이 용품</h2>
      <div className="product-grid">
        {playItems.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

window.PlayPage = PlayPage;
