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
      <button className="reportbtn" onClick={() => onNavigate('report')}>쇼핑몰 보고서</button>
    </nav>
  );
}

function Home() {
  return (
    <section className="hero">
      <h2>우리 반려동물을 위한 최고의 선택</h2>
      <p>필요한 모든 용품을 한 곳에서 만나보세요.</p>
    </section>
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
      case 'report':
        return <ReportPage onBack={() => setPage('home')} />;
      default:
        return <Home />;
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
