const malls = [
  {
    name: "Amazon",
    features: ["Massive product selection", "Prime shipping", "Personalized recommendations"],
  },
  {
    name: "eBay",
    features: ["Auction-style listings", "Buyer protection", "Global marketplace"],
  },
  {
    name: "Walmart",
    features: ["Everyday low prices", "Store pickup", "Grocery delivery"],
  },
  {
    name: "Alibaba",
    features: ["Wholesale pricing", "International trade", "Supplier directory"],
  },
  {
    name: "Rakuten",
    features: ["Cashback rewards", "Marketplace diversity", "Member points"],
  },
];

// Aggregate unique features from all benchmarked malls to inspire our own shop
const myMall = {
  name: "MyMall",
  features: Array.from(new Set(malls.flatMap((m) => m.features))),
};

function ShoppingMall({ name, features }) {
  return (
    <div className="mall-card">
      <h2>{name}</h2>
      <ul>
        {features.map((f, idx) => (
          <li key={idx}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="mall-list">
      {malls.map((mall) => (
        <ShoppingMall key={mall.name} {...mall} />
      ))}
      <ShoppingMall key={myMall.name} {...myMall} />
    </div>
  );
}

window.App = App;
