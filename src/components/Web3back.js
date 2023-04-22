import React, { useState } from 'react';
import './styles.css';

const boxData = [
  { id: 1, heading: 'Box 1', text: 'This is the text for Box 1.' },
  { id: 2, heading: 'Box 2', text: 'This is the text for Box 2.' },
  { id: 3, heading: 'Box 3', text: 'This is the text for Box 3.' },
  { id: 4, heading: 'Box 4', text: 'This is the text for Box 4.' },
  { id: 5, heading: 'Box 5', text: 'This is the text for Box 5.' },
  { id: 6, heading: 'Box 6', text: 'This is the text for Box 6.' },
];

const Box = ({ id, heading, text, isMobile, isActive, handleClick }) => {
  const classNames = `box col mb-3 ${isActive ? 'active' : ''}`;
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  const backgroundColor = hovered ? '#ADD8E6' : '#0077CC';
  const color = hovered ? '#000000' : '#FFFFFF';

  return (
    <div className={classNames} onClick={() => handleClick(id)} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{ backgroundColor }}>
      <h2 style={{ color }}>{heading}</h2>
      <p style={{ color }}>{text}</p>
    </div>
  );
};

const BoxesRow = ({ boxes, isMobile, activeBoxId, handleClick }) => (
  <div className={`row${isMobile ? ' row-cols-1' : ' row-cols-3'} gx-3 mt-2`}>
    {boxes.map((box) => (
      <div className="col-md-4">
        <Box
          key={box.id}
          id={box.id}
          heading={box.heading}
          text={box.text}
          isMobile={isMobile}
          isActive={box.id === activeBoxId}
          handleClick={handleClick}
        />
      </div>
    ))}
  </div>
);

const Web3 = () => {
  const [activeBoxId, setActiveBoxId] = useState(null);
  const isMobile = window.innerWidth < 768;
  const rows = isMobile ? [boxData] : [boxData.slice(0, 3), boxData.slice(3, 6)];

  const handleBoxClick = (id) => {
    setActiveBoxId(id);
  };

  return (
    <div className="container mt-3">
      {rows.map((boxes, index) => (
        <BoxesRow
          key={index}
          boxes={boxes}
          isMobile={isMobile}
          activeBoxId={activeBoxId}
          handleClick={handleBoxClick}
        />
      ))}
    </div>
  );
};

export default Web3;

