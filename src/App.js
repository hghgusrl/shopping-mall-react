function NavBar({ onNavigate }) {
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => onNavigate('home')}>PetShop</div>
      <div className="dropdown">
        <button className="dropbtn">카테고리</button>
        <div className="dropdown-content">
          <a onClick={() => onNavigate('bath')}>목욕</a>
          <a onClick={() => onNavigate('toilet')}>배변</a>
          <a onClick={() => onNavigate('walk')}>산책</a>
          <a onClick={() => onNavigate('play')}>놀이</a>
          <a onClick={() => onNavigate('snack')}>간식</a>
          <a onClick={() => onNavigate('supplement')}>영양제</a>
        </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="찾고 있는 상품을 검색해보세요" />
        <button className="searchbtn">검색</button>
      </div>
    </nav>
  );
}

function CategoryCarousel({ title, items, onMore }) {
  const slides = [];
  for (let i = 0; i < items.length; i += 2) {
    slides.push(items.slice(i, i + 2));
  }
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="category-page">
      <div className="category-header">
        <h2>{title}</h2>
        <button className="more-btn" onClick={onMore}>더보기</button>
      </div>
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div className="slide" key={idx}>
              {slide.map((item) => (
                <div className="product-card" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <h4>{item.name}</h4>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Home({ onNavigate }) {
  return (
    <div>
      <section className="hero">
        <h2>우리 반려동물을 위한 최고의 선택</h2>
        <p>필요한 모든 용품을 한 곳에서 만나보세요.</p>
      </section>
      <CategoryCarousel title="목욕 용품" items={bathItems} onMore={() => onNavigate('bath')} />
      <CategoryCarousel title="배변 용품" items={toiletItems} onMore={() => onNavigate('toilet')} />
      <CategoryCarousel title="산책 용품" items={walkItems} onMore={() => onNavigate('walk')} />
      <CategoryCarousel title="놀이 용품" items={playItems} onMore={() => onNavigate('play')} />
      <CategoryCarousel title="간식" items={snackItems} onMore={() => onNavigate('snack')} />
      <CategoryCarousel title="영양제" items={supplementItems} onMore={() => onNavigate('supplement')} />
    </div>
  );
}

function App() {
  const [page, setPage] = React.useState('home');

  const renderPage = () => {
    switch (page) {
      case 'bath':
        return <BathPage onBack={() => setPage('home')} />;
      case 'toilet':
        return <ToiletPage onBack={() => setPage('home')} />;
      case 'walk':
        return <WalkPage onBack={() => setPage('home')} />;
      case 'play':
        return <PlayPage onBack={() => setPage('home')} />;
      case 'snack':
        return <SnackPage onBack={() => setPage('home')} />;
      case 'supplement':
        return <SupplementPage onBack={() => setPage('home')} />;
      default:
        return <Home onNavigate={setPage} />;
    }
  };

  return (
    <div>
      <NavBar onNavigate={setPage} />
      {renderPage()}
    </div>
  );
}

window.App = App;
