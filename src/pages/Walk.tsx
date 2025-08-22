import React, { useEffect, useState } from 'react';
import { Product } from '../types';

// TODO: 백엔드에서 산책 용품 데이터를 가져오도록 수정
export const walkItems: Product[] = [
  { id: 1, name: '리드줄', image: 'https://via.placeholder.com/150?text=Leash' },
  { id: 2, name: '하네스', image: 'https://via.placeholder.com/150?text=Harness' },
  { id: 3, name: '산책 가방', image: 'https://via.placeholder.com/150?text=Bag' },
  { id: 4, name: '물통', image: 'https://via.placeholder.com/150?text=Bottle' },
  { id: 5, name: '휴대용 밥그릇', image: 'https://via.placeholder.com/150?text=Bowl' },
  { id: 6, name: '반사 조끼', image: 'https://via.placeholder.com/150?text=Vest' },
  { id: 7, name: '배변봉투 홀더', image: 'https://via.placeholder.com/150?text=Holder' },
  { id: 8, name: '쿨링 밴드', image: 'https://via.placeholder.com/150?text=Cooling' },
  { id: 9, name: '우비', image: 'https://via.placeholder.com/150?text=Raincoat' },
  { id: 10, name: '안전 라이트', image: 'https://via.placeholder.com/150?text=Light' },
];

interface WalkPageProps {
  onBack: () => void;
}

export const WalkPage: React.FC<WalkPageProps> = ({ onBack }) => {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStart(prev => (prev + 5) % walkItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleItems = Array.from({ length: 5 }, (_, i) => walkItems[(start + i) % walkItems.length]);

  return (
    <div className="category-page">
      <button onClick={onBack}>뒤로가기</button>
      <h2>산책 용품</h2>
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
