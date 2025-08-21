import React, { useEffect, useState } from 'react';
import { Product } from '../types';

export const snackItems: Product[] = [
  { id: 1, name: '비스킷', image: 'https://via.placeholder.com/150?text=Biscuit' },
  { id: 2, name: '육포', image: 'https://via.placeholder.com/150?text=Jerky' },
  { id: 3, name: '캣닢 간식', image: 'https://via.placeholder.com/150?text=Catnip' },
  { id: 4, name: '치킨 스낵', image: 'https://via.placeholder.com/150?text=Chicken' },
  { id: 5, name: '연어 스낵', image: 'https://via.placeholder.com/150?text=Salmon' },
  { id: 6, name: '치즈 큐브', image: 'https://via.placeholder.com/150?text=Cheese' },
  { id: 7, name: '치킨 저키', image: 'https://via.placeholder.com/150?text=ChickenJerky' },
  { id: 8, name: '고구마 스낵', image: 'https://via.placeholder.com/150?text=SweetPotato' },
  { id: 9, name: '건조 생선', image: 'https://via.placeholder.com/150?text=Fish' },
  { id: 10, name: '양고기 스낵', image: 'https://via.placeholder.com/150?text=Lamb' },
];

interface SnackPageProps {
  onBack: () => void;
}

export const SnackPage: React.FC<SnackPageProps> = ({ onBack }) => {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStart(prev => (prev + 5) % snackItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleItems = Array.from({ length: 5 }, (_, i) => snackItems[(start + i) % snackItems.length]);

  return (
    <div className="category-page">
      <button onClick={onBack}>뒤로가기</button>
      <h2>간식</h2>
      <div className="product-grid">
        {visibleItems.map(item => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
