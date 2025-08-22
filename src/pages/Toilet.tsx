import React, { useEffect, useState } from 'react';
import { Product } from '../types';

// TODO: 백엔드에서 배변 용품 데이터를 가져오도록 수정
export const toiletItems: Product[] = [
  { id: 1, name: '모래 화장실', image: 'https://via.placeholder.com/150?text=Litter' },
  { id: 2, name: '배변 봉투', image: 'https://via.placeholder.com/150?text=Bags' },
  { id: 3, name: '탈취제', image: 'https://via.placeholder.com/150?text=Deodorizer' },
  { id: 4, name: '배변 패드', image: 'https://via.placeholder.com/150?text=Pad' },
  { id: 5, name: '청소 스프레이', image: 'https://via.placeholder.com/150?text=Spray' },
  { id: 6, name: '고양이 모래', image: 'https://via.placeholder.com/150?text=Sand' },
  { id: 7, name: '휴지통', image: 'https://via.placeholder.com/150?text=Trash' },
  { id: 8, name: '화장실 매트', image: 'https://via.placeholder.com/150?text=Mat' },
  { id: 9, name: '청소 브러쉬', image: 'https://via.placeholder.com/150?text=Brush' },
  { id: 10, name: '자동 화장실', image: 'https://via.placeholder.com/150?text=Auto' },
];

interface ToiletPageProps {
  onBack: () => void;
}

export const ToiletPage: React.FC<ToiletPageProps> = ({ onBack }) => {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStart(prev => (prev + 5) % toiletItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleItems = Array.from({ length: 5 }, (_, i) => toiletItems[(start + i) % toiletItems.length]);

  return (
    <div className="category-page">
      <button onClick={onBack}>뒤로가기</button>
      <h2>배변 용품</h2>
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
