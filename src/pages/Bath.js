const bathItems = [
  // TODO: Replace with backend API data
  { id: 1, name: "샴푸", image: "https://via.placeholder.com/150?text=Shampoo" },
  { id: 2, name: "수건", image: "https://via.placeholder.com/150?text=Towel" },
];

function BathPage({ onBack }) {
  return (
    <div className="category-page">
      <button onClick={onBack}>뒤로가기</button>
      <h2>목욕 용품</h2>
      <div className="product-grid">
        {bathItems.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

window.BathPage = BathPage;
