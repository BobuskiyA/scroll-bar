import React, { useRef, useState } from 'react';
import './styles.css';

const ScrollableContainer = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event) => {
    const container = containerRef.current;
    const scrollAmount = event.deltaY;
    const newPosition = scrollPosition + scrollAmount;
    setScrollPosition(newPosition);
    container.style.transform = `translateX(${newPosition}px)`;
  };

  const resetScrollPosition = () => {
    setScrollPosition(0);
    containerRef.current.style.transform = 'translateX(0)';
  };

  const items = [
    {
      title: 'Phase 1',
      list: ['Special events', 'Launch social networks', 'Launch token', 'Launch token on DEX'],
    },
    {
      title: 'Phase 2',
      content: 'Це другий елемент.',
      list: ['Launch on token CEX', 'Burn 1% PAND', 'Staking'],
    },
    {
      title: 'Phase 3',
      list: ['Take over the meme-coin market'],
    },
  ];

  return (
    <div>
      <h2 className="scroll-header">Roadmap</h2>
      <div className="scroll-container" onWheel={handleScroll}>
        <div className="scroll-content" ref={containerRef}>
          {items.map((item, index) => (
            <div className="item" key={index}>
              <h3>{item.title}</h3>
              <ul>
                {item.list.map((listItem, listIndex) => (
                  <li key={listIndex}>{listItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <button onClick={resetScrollPosition}>Скинути прокрутку</button>
      </div>
    </div>
  );
};

export default ScrollableContainer;
