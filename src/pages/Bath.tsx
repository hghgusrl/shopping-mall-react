import React, { useEffect, useState } from 'react';
import { Product } from '../types';

export const bathItems: Product[] = [
  { id: 1, name: '샴푸', image: 'https://via.placeholder.com/150?text=Shampoo' },
  { id: 2, name: '수건', image: 'https://via.placeholder.com/150?text=Towel' },
  { id: 3, name: '바디 브러쉬', image: 'https://via.placeholder.com/150?text=Brush' },
  { id: 4, name: '목욕 가운', image: 'https://via.placeholder.com/150?text=Robe' },
  { id: 5, name: '욕조', image: 'https://via.placeholder.com/150?text=Tub' },
  { id: 6, name: '드라이어', image: 'https://via.placeholder.com/150?text=Dryer' },
  { id: 7, name: '샤워 캡', image: 'https://via.placeholder.com/150?text=Cap' },
  { id: 8, name: '마사지 빗', image: 'https://via.placeholder.com/150?text=Massager' },
  { id: 9, name: '방수 앞치마', image: 'https://via.placeholder.com/150?text=Apron' },
  { id: 10, name: '목욕 장갑', image: 'https://via.placeholder.com/150?text=Glove' },
];

interface BathPageProps {
  onBack: () => void;
}

export const BathPage: React.FC<BathPageProps> = ({ onBack }) => {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStart(prev => (prev + 5) % bathItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleItems = Array.from({ length: 5 }, (_, i) => bathItems[(start + i) % bathItems.length]);

  return (
    <div className="category-page">
      <button onClick={onBack}>뒤로가기</button>
      <h2>목욕 용품</h2>
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
