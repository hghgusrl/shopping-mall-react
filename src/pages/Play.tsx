import React, { useEffect, useState } from 'react';
import { Product } from '../types';

// TODO: 백엔드에서 놀이 용품 데이터를 가져오도록 수정
export const playItems: Product[] = [
  { id: 1, name: '공', image: 'https://via.placeholder.com/150?text=Ball' },
  { id: 2, name: '로프 장난감', image: 'https://via.placeholder.com/150?text=Rope' },
  { id: 3, name: '오뚝이', image: 'https://via.placeholder.com/150?text=Tumbler' },
  { id: 4, name: '스크래처', image: 'https://via.placeholder.com/150?text=Scratcher' },
  { id: 5, name: '고양이 낚싯대', image: 'https://via.placeholder.com/150?text=Wand' },
  { id: 6, name: '터널', image: 'https://via.placeholder.com/150?text=Tunnel' },
  { id: 7, name: '레이저 포인터', image: 'https://via.placeholder.com/150?text=Laser' },
  { id: 8, name: '고무 뼈', image: 'https://via.placeholder.com/150?text=Bone' },
  { id: 9, name: '인형', image: 'https://via.placeholder.com/150?text=Doll' },
  { id: 10, name: '자동 공', image: 'https://via.placeholder.com/150?text=AutoBall' },
];

interface PlayPageProps {
  onBack: () => void;
}

export const PlayPage: React.FC<PlayPageProps> = ({ onBack }) => {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStart(prev => (prev + 5) % playItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleItems = Array.from({ length: 5 }, (_, i) => playItems[(start + i) % playItems.length]);

  return (
    <div className="category-page">
      <button onClick={onBack}>뒤로가기</button>
      <h2>놀이 용품</h2>
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
