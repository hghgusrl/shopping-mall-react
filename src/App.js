const categories = [
  { name: "Food", description: "Healthy meals and snacks" },
  { name: "Toys", description: "Fun for hours" },
  { name: "Grooming", description: "Keep them looking great" },
  { name: "Accessories", description: "Collars, leashes and more" },
];

const featured = [
  { name: "Chew Toy", price: "$9.99" },
  { name: "Organic Dog Food", price: "$24.99" },
  { name: "Cozy Bed", price: "$49.99" },
];

function Header() {
  return (
    <header className="site-header">
      <h1>PawPals Pet Shop</h1>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <h2>Everything Your Dog Needs</h2>
      <p>Quality toys, tasty treats and comfy beds.</p>
    </section>
  );
}

function CategorySection() {
  return (
    <section className="categories">
      {categories.map((cat) => (
        <div className="category-card" key={cat.name}>
          <h3>{cat.name}</h3>
          <p>{cat.description}</p>
        </div>
      ))}
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section className="featured">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {featured.map((prod) => (
          <div className="product-card" key={prod.name}>
            <h4>{prod.name}</h4>
            <span>{prod.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <CategorySection />
      <FeaturedProducts />
    </div>
  );
}

window.App = App;
