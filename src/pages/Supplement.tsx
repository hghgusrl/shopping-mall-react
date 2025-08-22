import React, { useEffect, useState } from 'react';
import { Product } from '../types';

// TODO: 백엔드에서 영양제 데이터를 가져오도록 수정
export const supplementItems: Product[] = [
  { id: 1, name: '비타민', image: 'https://via.placeholder.com/150?text=Vitamin' },
  { id: 2, name: '관절 영양제', image: 'https://via.placeholder.com/150?text=Joint' },
  { id: 3, name: '피부 영양제', image: 'https://via.placeholder.com/150?text=Skin' },
  { id: 4, name: '오메가3', image: 'https://via.placeholder.com/150?text=Omega3' },
  { id: 5, name: '멀티비타민', image: 'https://via.placeholder.com/150?text=Multi' },
  { id: 6, name: '체중 관리', image: 'https://via.placeholder.com/150?text=Weight' },
  { id: 7, name: '면역 강화', image: 'https://via.placeholder.com/150?text=Immune' },
  { id: 8, name: '치아 영양제', image: 'https://via.placeholder.com/150?text=Teeth' },
  { id: 9, name: '간 영양제', image: 'https://via.placeholder.com/150?text=Liver' },
  { id: 10, name: '프로바이오틱스', image: 'https://via.placeholder.com/150?text=Probiotics' },
];

interface SupplementPageProps {
  onBack: () => void;
}

export const SupplementPage: React.FC<SupplementPageProps> = ({ onBack }) => {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStart(prev => (prev + 5) % supplementItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleItems = Array.from({ length: 5 }, (_, i) => supplementItems[(start + i) % supplementItems.length]);

  return (
    <div className="category-page">
      <button onClick={onBack}>뒤로가기</button>
      <h2>영양제</h2>
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
